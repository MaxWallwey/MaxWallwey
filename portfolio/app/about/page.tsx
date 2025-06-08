import React from 'react';
import { Navbar } from '../../src/components/Navbar';
import { About } from '../../src/components/About';

export default function AboutPage() {
  return (
    <body className="min-h-screen bg-black">
      <header className="sticky">
        <Navbar />
      </header>
      <About />
    </body>
  );
}
