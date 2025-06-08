import React from 'react';
import { Navbar } from '../src/components/Navbar';
import { Home } from '../src/components/Home';
import type { Metadata } from 'next';

export default function Homepage() {
  return (
    <>
      <title>Home</title>
      <body className="min-h-screen">
        <header className="sticky">
          <Navbar />
        </header>
        <Home />
      </body>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Home',
};
