'use client';

import React, { useState } from 'react';
import MosaicGrid from './MosaicGrid';
import PasswordPromptModal from './PasswordPromptModal';

export const Wedding: React.FC = () => {
  return (
    <>
      <PasswordPromptModal />
      <div className="mt-10 flex justify-center text-black text-6xl">
        Gallery
      </div>
      <MosaicGrid />
    </>
  );
};
