'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import type { CapWidgetProps } from '@pitininja/cap-react-widget';

const Widget = dynamic(
  async () => {
    return (await import('@pitininja/cap-react-widget')).CapWidget;
  },
  { ssr: false }
);

export function CapWidget(props: Omit<CapWidgetProps, 'endpoint' | 'theme'>) {
  const { resolvedTheme } = useTheme();
  return (
    <Suspense>
      <Widget
        {...props}
        theme={resolvedTheme as CapWidgetProps['theme']}
        endpoint="https://cap.hyperce.io/8634a7bc68/"
      />
    </Suspense>
  );
}
