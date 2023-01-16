import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, flexbox, Show, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRefIndexInViewport } from '../hooks/useRefIndexInViewport';
import NavButton from './NavButton';

type Props = {
  refs: React.RefObject<HTMLDivElement>[];
};

function Navbar({ refs }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const refIndexInViewport = useRefIndexInViewport(refs);

  useEffect(() => {
    setSelectedIndex(refIndexInViewport);
  }, [refIndexInViewport]);

  const executeScroll = (index: number) => () => {
    setSelectedIndex(index);
    refs[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const isDark = colorMode === 'dark';

  const color = useColorModeValue('black', 'white');

  return (
    <Flex
      h={16}
      w="100%"
      py={2}
      px={{ base: 0, md: 4 }}
      align="center"
      justify="space-between"
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        fontFamily="fantasy"
        color={color}
        fontSize="3xl"
        mt={[2, 2, 4]}
        mb={[2, 2, 0]}
        width="100%"
        position="relative"
        justify={{ base: 'center', md: 'flex-start' }}
      >
        <Box>Xavier.Facqueur</Box>
        <Box position="absolute" right={0} top={0} mr={2}>
          <Show below="md">
            <Button onClick={toggleColorMode} colorScheme="blackAlpha">
              {isDark ? <SunIcon boxSize={6} color="white" /> : <MoonIcon boxSize={6} />}
            </Button>
          </Show>
        </Box>
      </Flex>
      <Box>
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
      </Box>
      <Show above="md">
        <Button mr={2} ml={10} onClick={toggleColorMode} colorScheme="blackAlpha">
          {isDark ? <SunIcon boxSize={6} color="white" /> : <MoonIcon boxSize={6} />}
        </Button>
      </Show>
    </Flex>
  );
}

export default Navbar;
