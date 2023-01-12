import { Button } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = {
  isSelected: boolean;
  onClick: () => void;
};

function NavButton({ isSelected, onClick, children }: PropsWithChildren<Props>) {
  return (
    <Button
      opacity={1}
      fontFamily="fantasy"
      fontSize="2xl"
      onClick={onClick}
      _after={{
        content: '""',
        position: 'absolute',
        bgColor: '#50E3C2',
        height: '1px',
        width: isSelected ? '100%' : 0,
        left: 0,
        bottom: '-3px',
        transition: 'width .3s ease-in-out',
      }}
      _hover={{
        color: 'color: #50E3C2',
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
