import React from 'react';
import { Navbar } from '../src/components/Navbar';
import { Home } from '../src/components/Home';

export default function Homepage() {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
    </>
  );
}
