import Image from 'next/image';
import React from 'react';
import { Flex } from '@chakra-ui/react';

export const Wedding: React.FC = () => {
  return (
    <>
      <Flex justify="center" mt="5" mb="5">
        <Image
          src="/img/wedding/portrait.png"
          alt="Portrait of the bride and groom"
          width="800"
          height="100"
        />
      </Flex>
      <Flex justify="center" mt="5" mb="5">
        <Image
          src="/img/wedding/another_one_bites_the_dust.png"
          alt="Portrait of the bride and groom"
          width="200"
          height="100"
        />
        <Image
          src="/img/wedding/alissa.png"
          alt="Portrait of the bride and groom"
          width="200"
          height="100"
        />
      </Flex>
    </>
  );
};
