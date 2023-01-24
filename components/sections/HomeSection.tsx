import { Box, Button, Flex, keyframes, Show, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import { downloadPDF } from '../../utils/downloadPDF';

// eslint-disable-next-line react/display-name
export const HomeSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  const brandColor = useColorModeValue('#319795', '#50E3C2');

  const animatedText = keyframes`
    from { width: 0; }
    to { width: 90%; }
  `;

  const animatedCursor = keyframes`
    from{border-right-color: "#50E3C2";}
    to{border-right-color: transparent;}
  }`;

  const animation = `${animatedText} 2s steps(20) 1s 1 normal both, ${animatedCursor} 1s steps(16) infinite normal;`;

  return (
    <Flex
      ref={ref}
      h="100vh"
      mx="auto"
      maxWidth={{ base: '93%', lg: '80%' }}
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justify={{ base: 'center', lg: 'space-between' }}
      position="relative"
    >
      <Box mb={20} position="relative" zIndex={10}>
        <Text fontSize={'4xl'}>Hi, I am Xavier Facqueur</Text>
        <Text
          fontSize={'4xl'}
          color={brandColor}
          animation={animation}
          whiteSpace="nowrap"
          borderRight={`solid 3px ${brandColor};`}
          overflow={'hidden'}
        >
          Full Stack developer
        </Text>
        <Flex gap={3} mt={10}>
          <Link target="_blank" href="https://github.com/xavierfqr">
            <Image src="/github.png" alt="programmer illustration" height={35} width={35} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/xavier-facqueur-06413a195/?locale=en_US">
            <Image src="/linkedin.png" alt="programmer illustration" height={35} width={35} />
          </Link>
        </Flex>
        <Button colorScheme="teal" mt={5} onClick={() => downloadPDF('/resume.pdf', 'resume_xavierfacqueur.pdf')}>
          Check my resume
        </Button>
      </Box>
      <Show above="lg">
        <Image src="/programmer_working.png" alt="programmer illustration" height={1} width={460} className="mb-20" />
      </Show>
      <Box position="absolute" bottom={[100, 20, 0]} w="100%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="none">
          <path
            d="M 0 350 Q 250 250 400 300 Q 500 350 800 300 L 800 300 Q 415 400 350 350 Q 300 300 0 350 L 0 350 "
            fill={`${brandColor}`}
          />
        </svg>
      </Box>
    </Flex>
  );
});
