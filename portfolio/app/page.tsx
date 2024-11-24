import React from 'react';
import { Navbar } from '../src/components/Navbar';
import { Home } from '../src/components/Home';

export default function Homepage() {
  return (
    <body  className='min-h-screen bg-black'>
      <header className='sticky'>
        <Navbar />
      </header>
      <Home />
    </body>
  );
}
