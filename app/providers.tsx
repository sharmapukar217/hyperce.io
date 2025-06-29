'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers(props: React.PropsWithChildren) {
  React.useEffect(() => {
    if (typeof window.crypto.randomUUID === 'undefined') {
      window.crypto.randomUUID = () => '';
    }
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {props.children}
    </ThemeProvider>
  );
}
