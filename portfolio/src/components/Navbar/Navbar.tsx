'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export const Navbar: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-center mt-5 text-xl">
      {pathName !== '/wedding' && (
        <div className="bg-black border-2 border-solid border-white rounded-full">
          <a
            className={
              pathName === '/'
                ? 'mx-3 font-semibold text-white'
                : 'mx-3 hover:font-semibold text-white'
            }
            href="/"
          >
            Home
          </a>
          <a
            className={
              pathName === '/about'
                ? 'mx-3 font-semibold text-white'
                : 'mx-3 hover:font-semibold text-white'
            }
            href="/about"
          >
            About
          </a>

          <a
            className={
              pathName === '/wedding'
                ? 'mx-3 font-semibold text-white'
                : 'mx-3 hover:font-semibold text-white'
            }
            href="/wedding"
          >
            Wedding
          </a>
        </div>
      )}
      {pathName === '/wedding' && (
        <div className="bg-white border-2 border-solid border-black rounded-full">
          <a className={'mx-3 hover:font-semibold text-black'} href="/">
            Home
          </a>
          <a className={'mx-3 hover:font-semibold text-black'} href="/about">
            About
          </a>

          <a className={'mx-3 font-semibold text-black'} href="/wedding">
            Wedding
          </a>
        </div>
      )}
    </div>
  );
};
