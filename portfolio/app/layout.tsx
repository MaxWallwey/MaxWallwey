import React from 'react';
import './globals.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Provider } from '@/components/ui/provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${montserrat.variable} ${roboto_mono.variable}`}
    >
      <Provider>{children}</Provider>
    </html>
  );
}
