import NextImage from 'next/image';
import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

export const Wedding: React.FC = () => {
  return (
    <>
      <Flex justify="center">
        <Image asChild>
          <NextImage
            src="/img/portrait.png"
            alt="Portrait of the bride and groom"
            width="800"
            height="100"
          />
        </Image>
      </Flex>
    </>
  );
};
