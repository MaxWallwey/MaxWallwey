import Head from "next/head";
import React from "react";

export const About: React.FC = () => {
  return (
    <>
      <div className="mt-10 flex justify-center text-white text-xl">
        <Head>About me</Head>
        About me
      </div>
      <div className="flex text-white">
        <p className="mt-5 mx-10">
          I'm a software engineer <br />
          currently based in the UK. <br />
          I was born in Germany and moved <br />
          to Sheffield to pursue a degree in Physics.
        </p>
      </div>
    </>
  );
};
