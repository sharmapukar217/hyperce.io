'use client';

import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

export default function Providers(props: React.PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Toaster position="bottom-right" toastOptions={{ duration: 5_000 }} />
      {props.children}
    </ThemeProvider>
  );
}
