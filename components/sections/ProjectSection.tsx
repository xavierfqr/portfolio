import { Box, Flex, Heading, Image, Icon } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { SiSolidity, SiReact, SiTypescript } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

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
  },
  {
    src: '/projects/invoices.png',
    alt: 'Project invoices',
  },
  {
    src: '/projects/LydiaSol.png',
    alt: 'Project lydia',
    url: 'https://lydia-sol-qs5.vercel.app/',
  },
  {
    src: '/projects/blokoding.png',
    alt: 'Project blokoding',
    url: 'https://play.google.com/store/apps/details?id=com.blokoding',
  },
  {
    src: '/projects/documents.png',
    alt: 'Beeldi Socuments section',
  },
];

// eslint-disable-next-line react/display-name
export const ProjectSection = forwardRef<HTMLDivElement, any>((_, ref) => {
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
      <Heading as="h2" color="brand" mb={10} display="flex" alignItems="center">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="spade" />
        Projects
      </Heading>
      <Carousel
        width="45rem"
        infiniteLoop
        showStatus={false}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        onClickItem={onClickItem}
        showThumbs={false}
      >
        {projects.map((project, index) => (
          <Flex key={index} cursor={project.url ? 'pointer' : 'auto'} alignItems="center" justify="center">
            <Image src={project.src} alt={project.alt} objectFit="contain" h={370} />
          </Flex>
        ))}
      </Carousel>

      <Icon boxSize={100} position="absolute" top={20} left={-20} color="blackAlpha.600">
        <SiSolidity />
      </Icon>
      <Icon boxSize={100} position="absolute" bottom={200} left={10} color="blue.300">
        <SiReact />
      </Icon>
      <Icon boxSize={100} position="absolute" top={120} right={30} color="blue.500">
        <SiTypescript />
      </Icon>
      <Icon boxSize={100} position="absolute" bottom={120} right={30} color="blackAlpha.500">
        <FaEthereum />
      </Icon>
    </Flex>
  );
});

// SiSolidity, SiReact, SiTypescript, FaEthereum TbBrandNextjs
