import Head from 'next/head';
import React from 'react';

export const About: React.FC = () => {
  return (
    <>
      <div className="mt-10 flex justify-center text-black text-xl">
        <Head>About me</Head>
        About me
      </div>
      <div className="flex text-black">
        <p className="mt-5 mx-10">
          I’m a motivated and detail-oriented Software Engineer based in the UK,
          with a strong international perspective shaped by growing up in
          Germany. I specialize in full-stack development, object-oriented
          programming, and agile methodologies, with a passion for creating
          scalable, user-centric solutions. Continuously driven by curiosity, I
          actively seek out opportunities to learn and work with emerging
          technologies. I thrive in collaborative environments where innovative
          tools and approaches are used to build products that make a real
          impact.
        </p>
      </div>
    </>
  );
};
