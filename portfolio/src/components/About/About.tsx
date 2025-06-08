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
        <p className="mt-5 mx-10"></p>
      </div>
    </>
  );
};
