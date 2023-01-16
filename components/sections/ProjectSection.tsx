import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React, { forwardRef, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useUnderlineAnnotation } from '../../hooks/useAnnotation';

const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
  return (
    <div
      className={`${
        hasNext ? 'absolute' : 'hidden'
      } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
      onClick={clickHandler}
    >
      <ArrowRightIcon className="w-9 h-9 text-white" />
    </div>
  );
};

const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
  return (
    <div
      className={`${
        hasPrev ? 'absolute' : 'hidden'
      } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
      onClick={clickHandler}
    >
      <ArrowLeftIcon className="w-9 h-9 text-white" />
    </div>
  );
};

const onClickItem = (itemIndex: number) => {
  if (!projects[itemIndex].url) return;
  window.open(projects[itemIndex].url, '_blank');
};

const projects = [
  {
    src: '/projects/XFQerc20-token.png',
    alt: 'Project token',
    url: 'https://xfq-token.vercel.app/',
    desc: 'Project to mint my token on goerli testnet',
  },
  {
    src: '/projects/invoices.png',
    alt: 'Project invoices',
    desc: 'Web application to manage invoices',
  },
  {
    src: '/projects/LydiaSol.png',
    alt: 'Project lydia',
    url: 'https://lydia-sol-qs5.vercel.app/',
    desc: 'Lydia like application on ethereum blockchain',
  },
  {
    src: '/projects/blokoding.png',
    alt: 'Project blokoding',
    url: 'https://play.google.com/store/apps/details?id=com.blokoding',
    desc: 'Blokoding: mobile app to teach programming to kids',
  },
  {
    src: '/projects/GE_Healthcare.png',
    alt: 'Project GE Healthcare',
    desc: 'Web application built for General Electric Healthcare to help doctors interpreting medical images on their patients',
  },
  {
    src: '/projects/documents.png',
    alt: 'Beeldi Socuments section',
    desc: 'Tool to manage documents for Beeldi',
  },
];

// eslint-disable-next-line react/display-name
export const ProjectSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Flex
      ref={ref}
      h="100vh"
      mx="auto"
      maxWidth="80%"
      alignItems="center"
      justify="center"
      direction="column"
      position="relative"
    >
      <Heading as="h2" color="brand" mb={{ base: 2, md: 20 }} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="spade" />
        Projects
      </Heading>
      <Carousel
        width="100%"
        infiniteLoop
        showStatus={false}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        onClickItem={onClickItem}
        showThumbs={false}
        className="select-none relative"
        showIndicators={false}
        onChange={(index) => setSelectedIndex(index)}
      >
        {projects.map((project, index) => (
          <Flex
            key={index}
            direction="column"
            cursor={project.url ? 'pointer' : 'auto'}
            alignItems="center"
            justify="center"
          >
            <Image src={project.src} alt={project.alt} objectFit="contain" h={370} />
          </Flex>
        ))}
      </Carousel>
      <Box as="i" maxW={{ base: '95%', md: '70%' }} p={2} mt={2} rounded="md" bg="black" fontSize="xl">
        {projects[selectedIndex].desc}
      </Box>
    </Flex>
  );
});
