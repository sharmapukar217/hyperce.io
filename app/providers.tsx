'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers(props: React.PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {props.children}
    </ThemeProvider>
  );
}
