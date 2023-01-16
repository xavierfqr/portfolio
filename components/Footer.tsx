import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  const brandColor = useColorModeValue('#319795', '#50E3C2');

  return (
    <Flex align="center" justify="center" position="absolute" bottom={0} w="100%">
      <Text as="i" w="80%" borderTop={`2px solid ${brandColor}`} textAlign="center" p={3}>
        Made by Xavier Facqueur - facqueur.xavier.pro@gmail.com
      </Text>
    </Flex>
  );
};
