import { Box, Circle, Flex, Heading, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { RxDotFilled } from 'react-icons/rx';

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

// eslint-disable-next-line react/display-name
export const AboutSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex ref={ref} h="100vh" w="80%" m="auto" justify="center" alignItems="center" direction="column">
      <Heading as="h2" color="brand" mb={10} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="props" />
        About
      </Heading>
      <Box mb={10} justifySelf="flex-start" w="100%">
        <Heading as="h3" fontSize="3xl" mb={6}>
          Description
        </Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus, adipisci esse nisi iure dolorem
          dolor ipsam hic ea saepe exercitationem, sint id molestias beatae velit iste mollitia, nulla nihil.
        </Text>
      </Box>
      <Box justifySelf="flex-start" w="100%">
        <Heading as="h3" fontSize="3xl" mb={6}>
          Technologies
        </Heading>
        <Flex wrap="wrap" columnGap={10} rowGap={4}>
          {competences.map((competence) => (
            <List key={competence}>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={RxDotFilled} color="brand" />
                <Text fontSize="lg">{competence}</Text>
              </ListItem>
            </List>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
});
