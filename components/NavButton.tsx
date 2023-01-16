import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = {
  isSelected: boolean;
  onClick: () => void;
};

function NavButton({ isSelected, onClick, children }: PropsWithChildren<Props>) {
  const textColor = useColorModeValue('black', 'white');
  const brandColor = useColorModeValue('#319795', '#50E3C2');

  return (
    <Button
      bg="none"
      color={textColor}
      p={{ base: 3, md: 4 }}
      fontSize={{ base: 'lg', md: '2xl' }}
      onClick={onClick}
      _focus={{
        bg: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        bgColor: `${brandColor}`,
        height: '2px',
        width: isSelected ? '100%' : 0,
        left: 0,
        bottom: '-3px',
        transition: 'width .3s ease-in-out',
      }}
      _hover={{
        _after: {
          width: '100%',
        },
      }}
    >
      {children}
    </Button>
  );
}

export default NavButton;
