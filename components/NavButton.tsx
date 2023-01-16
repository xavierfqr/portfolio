import { Button } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = {
  isSelected: boolean;
  onClick: () => void;
};

function NavButton({ isSelected, onClick, children }: PropsWithChildren<Props>) {
  return (
    <Button
      p={{ base: 3, md: 4 }}
      fontSize={{ base: 'lg', md: '2xl' }}
      onClick={onClick}
      _after={{
        content: '""',
        position: 'absolute',
        bgColor: 'brand',
        height: '1px',
        width: isSelected ? '100%' : 0,
        left: 0,
        bottom: '-3px',
        transition: 'width .3s ease-in-out',
      }}
      _hover={{
        color: 'color: brand',
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
