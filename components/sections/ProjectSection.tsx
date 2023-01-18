import { Box, Button, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, Icon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

type Project = {
  src: string;
  alt: string;
  url?: string;
  desc: string;
};

const projects: Project[] = [
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
  // {
  //   src: '/projects/blokoding.png',
  //   alt: 'Project blokoding',
  //   url: 'https://play.google.com/store/apps/details?id=com.blokoding',
  //   desc: 'Blokoding: mobile app to teach programming to kids',
  // },
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
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isArrowDisabled, setIsArrowDisabled] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const brandColor = useColorModeValue('#319795', '#50E3C2');

  useEffect(() => {
    if (!carouselRef.current || !carouselRef.current.scrollWidth) return;
    setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const onArrowClick = (direction: 'left' | 'right') => {
    if (isArrowDisabled) return;
    if (!projectRef.current || !projectRef.current.offsetWidth) return;
    const width = projectRef.current.offsetWidth;
    if (!carouselRef.current || !carouselRef.current.scrollWidth) return;
    if (direction === 'left') {
      carouselRef.current.scrollLeft -= width;
    } else {
      carouselRef.current.scrollLeft += width;
    }
    setIsArrowDisabled(true);
    setTimeout(() => {
      setIsArrowDisabled(false);
    }, 800);
  };

  return (
    <Flex ref={ref} h="100vh" mx="auto" maxWidth="80%" justify="center" direction="column" position="relative">
      <Heading as="h2" color={brandColor} mb={{ base: 2, md: 20 }} display="flex" alignItems="center" margin="auto">
        <Image src="/spades.png" w={7} h={7} mr={3} alt="spade" />
        Projects
      </Heading>
      <Box className="flex items-center justify-center">
        <Icon onClick={() => onArrowClick('left')} bg="whiteAlpha.100" cursor="pointer" rounded="md" boxSize="10">
          <ArrowBackIcon></ArrowBackIcon>
        </Icon>
        <motion.div
          ref={carouselRef}
          className="cursor-grab  overflow-hidden rounded-xl bg-gray-800 scroll-smooth"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div drag="x" dragConstraints={{ right: 0, left: -carouselWidth }} className="flex rounded-xl w-full">
            {projects.map((project, index) => (
              <motion.div
                ref={projectRef}
                key={index}
                className={`min-w-[100%] max-w-[100%] p-10 flex flex-col items-center justify-center rounded-l`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  borderRadius="2xl"
                  onClick={() => (project.url ? window.open(project.url, '_blank') : null)}
                  w="60%"
                  cursor={`${project.url} ? 'pointer' : 'auto'`}
                />
                <p>{[project.desc]}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Icon onClick={() => onArrowClick('right')} bg="whiteAlpha.100" cursor="pointer" rounded="md" boxSize="10">
          <ArrowForwardIcon></ArrowForwardIcon>
        </Icon>
      </Box>
    </Flex>
  );
});
