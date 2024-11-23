import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <div
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}
      className='font-sans flex flex-row justify-between max-w-5xl mx-auto  px-4 py-3 sm:px-6'
    >
      <a href='/'>Home</a>
      <div>
        <a href='/wedding'>Wedding</a>
        <a href='/me'>Me</a>
      </div>
    </div>
  );
};
