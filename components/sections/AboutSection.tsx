import {
  Box,
  Flex,
  Heading,
  Image,
  keyframes,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { useUnderlineAnnotation } from '../../hooks/useAnnotation';

const competences = [
  'React',
  'Typescript',
  'Javascript',
  'Solidity',
  'NodeJs',
  'Hardhat',
  'Ethers.js',
  'HTML',
  'CSS',
  'NextJs',
  'Firebase',
  'NestJs',
  'C++',
  'C',
  'Java',
  'Tailwind',
  'Material-UI',
  'Chakra-UI',
];

const animatedText = keyframes`
from { transform: translateY(0px); }
to { transform: translateY(-5px); }
`;

const animation = `${animatedText} 0.5s forwards`;

// eslint-disable-next-line react/display-name
export const AboutSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  const technologiesRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const brandColor = useColorModeValue('#319795', '#50E3C2');

  useUnderlineAnnotation(technologiesRef);
  useUnderlineAnnotation(descriptionRef);

  return (
    <Flex
      ref={ref}
      h={{ base: '100%', sm: '100vh' }}
      w={{ base: '90%', md: '80%' }}
      m="auto"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Heading as="h2" color={brandColor} pt={6} mb={10} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="props" />
        About
      </Heading>
      <Box mb={10} justifySelf="flex-start" w="100%">
        <Heading as="h3" fontSize="3xl" mb={6} ref={descriptionRef} w="fit-content">
          Description
        </Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium fugit ratione aliquid delectus
          hic, dolorum ullam commodi necessitatibus, recusandae perferendis nulla reprehenderit assumenda eos possimus
          quod magnam velit eaque officiis perspiciatis
        </Text>
      </Box>
      <Box justifySelf="flex-start" w="100%">
        <Heading as="h3" fontSize="3xl" mb={6} ref={technologiesRef} w="fit-content">
          Technologies
        </Heading>
        <List display="flex" flexWrap="wrap" columnGap={10} rowGap={4} cursor="default">
          {competences.map((competence) => (
            <ListItem key={competence} display="flex" alignItems="center" _hover={{ animation: animation }}>
              <ListIcon as={RxDotFilled} color={brandColor} />
              <Text fontSize="lg">{competence}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
});
