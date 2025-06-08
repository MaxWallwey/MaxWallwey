import React from 'react';
import { Navbar } from '../../src/components/Navbar';
import { Wedding } from '../../src/components/Wedding';

export default function WeddingOverview() {
  return (
    <body className="min-h-screen">
      <header className="sticky">
        <Navbar />
      </header>
      <Wedding />
    </body>
  );
}
