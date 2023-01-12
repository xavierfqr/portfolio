import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import NavButton from './NavButton';

type Props = {
  refs: React.RefObject<HTMLDivElement>[];
};

function Navbar({ refs }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const executeScroll = (index: number) => () => {
    setSelectedIndex(index);
    refs[index].current?.scrollIntoView();
  };
  const isDark = colorMode === 'dark';

  const color = useColorModeValue('black', 'white');

  return (
    <Flex h={16} w="100%" py={2} px={4} align="center" justify="space-between" position="fixed" top={0} left={0}>
      <Box fontFamily="fantasy" color={color} fontSize="2xl">
        Xavierfqr
      </Box>
      <Flex gap={2}>
        <NavButton isSelected={selectedIndex === 0} onClick={executeScroll(0)}>
          Home
        </NavButton>
        <NavButton isSelected={selectedIndex === 1} onClick={executeScroll(1)}>
          About
        </NavButton>
        <NavButton isSelected={selectedIndex === 2} onClick={executeScroll(2)}>
          Projects
        </NavButton>
        <NavButton isSelected={selectedIndex === 3} onClick={executeScroll(3)}>
          Contact Me
        </NavButton>
      </Flex>

      <Button mr={2} onClick={toggleColorMode} colorScheme="blackAlpha">
        {isDark ? <SunIcon boxSize={6} color="white" /> : <MoonIcon boxSize={6} />}
      </Button>
    </Flex>
  );
}

export default Navbar;
