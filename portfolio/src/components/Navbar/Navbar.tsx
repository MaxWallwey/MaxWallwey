'use client'

import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar: React.FC = () => {
  const pathName = usePathname()
  
  return (
    <div
      className='flex justify-center mt-5 text-xl'
    >
      <div className='bg-black border-2 border-solid border-white rounded-full'>
        <a className={pathName==='/' ? 'mx-3 font-semibold text-white' : 'mx-3 hover:font-semibold text-white'} href='/'>Home</a>
        <a className={pathName==='/about' ? 'mx-3 font-semibold text-white' : 'mx-3 hover:font-semibold text-white'} href='/about'>About</a>
        {/* {pathName === '/wedding' ? (<a className='mx-3 font-semibold text-white' href='/wedding'>Wedding</a>) : (<></>)} */}
      </div>
    </div>
  );
};
