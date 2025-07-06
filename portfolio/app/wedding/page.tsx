import React, { useState } from 'react';
import { Navbar } from '../../src/components/Navbar';
import { Wedding } from '../../src/components/Wedding';
import PasswordPromptModal from '@/components/Wedding/PasswordPromptModal';

export default function WeddingPage() {
  return (
    <body className="min-h-screen">
      <header className="sticky">
        <Navbar />
      </header>
      <Wedding />
    </body>
  );
}
