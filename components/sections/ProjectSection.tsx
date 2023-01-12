import { Box, Flex, Image } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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
    alt: 'Project 1',
    url: 'https://github.com/xavierfqr/XFQ-token',
  },
  {
    src: '/projects/invoices.png',
    alt: 'Project 4',
  },
  {
    src: '/projects/LydiaSol.png',
    alt: 'Project 5',
    url: 'https://github.com/xavierfqr/Lydia-sol',
  },
  {
    src: '/projects/blokoding.png',
    alt: 'Project 2',
    url: 'https://play.google.com/store/apps/details?id=com.blokoding',
  },
  {
    src: '/projects/documents.png',
    alt: 'Project 3',
  },
];

export const ProjectSection = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex ref={ref} h="100vh" mx="auto" maxWidth="80%" alignItems="center" justify="center">
      <Carousel
        width="45rem"
        infiniteLoop
        showStatus={false}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        onClickItem={onClickItem}
        showThumbs={false}
        className="shadow-[0_0px_30px_0px_#50E3C244] p-32 rounded-xl"
      >
        {projects.map((project) => (
          <Flex cursor={project.url ? 'pointer' : 'auto'} alignItems="center" justify="center">
            <Image src={project.src} alt={project.alt} objectFit="contain" h={370} />
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
});