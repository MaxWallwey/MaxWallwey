import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="mt-10 flex justify-center text-black text-6xl">
      <h1>404 | Not Found</h1>
      <div>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
}
