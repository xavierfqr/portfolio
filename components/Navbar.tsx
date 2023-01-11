import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';

type Props = {
  refs: React.RefObject<HTMLDivElement>[];
};

function Navbar({ refs }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();

  const executeScroll = (index: number) => () => refs[index].current?.scrollIntoView();
  const isDark = colorMode === 'dark';

  colorMode;
  return (
    <Flex
      h={16}
      w="100%"
      bg="purple.900"
      py={2}
      px={4}
      align="center"
      justify="space-between"
      position="sticky"
      top={0}
      left={0}
    >
      <Box fontFamily="fantasy" color="white" fontSize="2xl">
        Xavierfqr
      </Box>
      <Flex gap={2}>
        <Button opacity={1} colorScheme="cyan" fontSize="2xl" onClick={executeScroll(0)}>
          Home
        </Button>
        <Button fontSize="2xl" colorScheme="cyan" onClick={executeScroll(1)}>
          About
        </Button>
      </Flex>

      <Button mr={2} onClick={toggleColorMode} colorScheme="blackAlpha">
        {isDark ? <SunIcon boxSize={6} color="white" /> : <MoonIcon boxSize={6} />}
      </Button>
      {isDark}
    </Flex>
  );
}

export default Navbar;
