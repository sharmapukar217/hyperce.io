'use client';
import * as React from 'react';

type BlinticAIWidgetProps = {
  apiKey: string;
  baseUrl: string;
  projectId: string;
};

export default function BlinticAIWidget({
  apiKey,
  baseUrl,
  projectId
}: BlinticAIWidgetProps) {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const iframeSrc = `${baseUrl}/iframe/${projectId}?apiKey=${apiKey}&pos=bottom`;

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === new URL(iframeSrc).origin) {
        const iframe = iframeRef.current;
        if (!iframe || event.data?.type !== 'resize') return;

        const { width, height, isModalOpen, isMobile } = event.data;
        const isMobileModalOpen = true;
        // && isMobile && isModalOpen;

        Object.assign(iframe.style, {
          height,
          width: isMobileModalOpen ? '100vw' : width,

          left: isMobileModalOpen ? '50%' : '',
          right: isMobileModalOpen ? 'auto' : 0,
          transform: isMobileModalOpen ? 'translateX(-50%)' : ''
        });
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [iframeSrc]);

  return (
    <iframe
      ref={iframeRef}
      src={iframeSrc}
      allow="microphone; camera"
      className="fixed bottom-0 z-[10000]"
      style={{ colorScheme: 'normal', right: 0 }}
      onLoad={() => console.log('iframe loaded')}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
}
