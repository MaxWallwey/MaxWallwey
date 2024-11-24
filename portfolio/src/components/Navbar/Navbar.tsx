'use client'

import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar: React.FC = () => {
  const pathName = usePathname()
  
  return (
    <div
      className='flex justify-center mt-3 text-xl'
    >
      <div className='bg-white border-2 border-solid border-black rounded-full'>
        <a className={pathName==='/' ? 'mx-3 font-semibold' : 'mx-3 hover:font-semibold'} href='/'>Home</a>
        <a className={pathName==='/about' ? 'mx-3 font-semibold' : 'mx-3 hover:font-semibold'} href='/about'>About</a>
      </div>
    </div>
  );
};
