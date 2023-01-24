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
import React, { forwardRef, useRef } from 'react';
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
      <Heading as="h2" color={brandColor} pt={6} mb={20} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="props" />
        About
      </Heading>
      <Box mb={16} w="100%">
        <Heading as="h3" fontSize="3xl" mb={8} ref={descriptionRef} w="fit-content">
          Description
        </Heading>

        <Box fontSize="lg">
          I am a full stack developer with a passion for React - Typescript and blockchain technologies. I recently
          graduated from Epita, a French computer engineering school. I am currently looking for a full time position as
          a full-stack developer. I am also open to freelance projects.
        </Box>
      </Box>
      <Box w="100%">
        <Heading as="h3" fontSize="3xl" mb={8} ref={technologiesRef} w="fit-content">
          Technologies
        </Heading>
        <List display="flex" flexWrap="wrap" columnGap={12} rowGap={8} cursor="default">
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
