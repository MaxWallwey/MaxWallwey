'use client';

import React, { useState } from 'react';
import MosaicGrid from './MosaicGrid';
import PasswordPromptModal from './PasswordPromptModal';

export const Wedding: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn === false) {
    return (
      <>
        <PasswordPromptModal />
        {setIsLoggedIn(true)}
      </>
    );
  }
  isLoggedIn && (
    <>
      <div className="mt-10 flex justify-center text-black text-6xl">
        Gallery
      </div>
      <MosaicGrid />
    </>
  );
};
