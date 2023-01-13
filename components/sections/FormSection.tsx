import React, { forwardRef, useRef } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Image,
} from '@chakra-ui/react';
import { Field, Form, Formik, FormikHelpers, type FieldAttributes } from 'formik';
import emailjs from '@emailjs/browser';

const initalValues = {
  user_name: '',
  user_email: '',
  message: '',
};

type InitialValues = typeof initalValues;

type Mail = `${string}@${string}.${string}`;

const isMail = (email: string): email is Mail => {
  return email.includes('@') && email.includes('.');
};

const validateEmail = (value: string) => {
  if (!isMail(value)) {
    return 'Invalid email address';
  }
};

// eslint-disable-next-line react/display-name
export const FormSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  const formMailRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (values: InitialValues, actions: FormikHelpers<InitialValues>) => {
    try {
      if (!formMailRef.current) return;
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        values,
        process.env.NEXT_PUBLIC_EMAIL_KEY as string
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex ref={ref} h="100vh" mx="auto" maxWidth="80%" alignItems="center" justify="center" direction="column">
      <Heading as="h2" color="brand" mb={10} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="props" />
        Contact Me
      </Heading>
      <Formik initialValues={initalValues} onSubmit={handleSubmit}>
        {(props) => (
          <Form className="w-3/5" ref={formMailRef}>
            <Field name="user_name">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder="Enter your name" />
                </FormControl>
              )}
            </Field>
            <Field name="user_email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.user_email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Enter your email" />
                  <FormErrorMessage>{form.errors.user_email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field }: FieldAttributes<any>) => (
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea {...field} placeholder="Enter your message" resize="none" />
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
});

export default FormSection;
