'use client';

import { useEffect } from 'react';

export default function BlinticAIWidget() {
  useEffect(() => {
    const config = {
      projectId: '86266321-bcb8-4757-996b-d98404c33b33',
      apiKey:
        '6ea3078788ed63cc6a7393d17c5064e34f45fe0822ab600ea958dab68b2dd25c',
      position: 'bottom-right', // Options: bottom-right | bottom-left
      baseUrl: 'https://app.blinticai.com'
    };

    const iframeId = 'blintic-ai-iframe';
    let iframe = document.getElementById(iframeId) as HTMLIFrameElement;

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = iframeId;
      iframe.src = `${config.baseUrl}/iframe/${config.projectId}?apiKey=${config.apiKey}&pos=${config.position}`;

      const isLeft = config.position.includes('left');
      const isBottom = config.position.includes('bottom');

      Object.assign(iframe.style, {
        position: 'fixed',
        bottom: isBottom ? '0px' : 'unset',
        top: isBottom ? 'unset' : '0px',
        left: isLeft ? '0px' : 'unset',
        right: isLeft ? 'unset' : '0px',
        width: '80px',
        height: '80px',
        border: '0',
        margin: '0',
        padding: '0',
        display: 'block',
        outline: 'none',
        zIndex: '2147483640',
        background: 'transparent'
      });

      iframe.allow = 'microphone; camera';
      document.body.appendChild(iframe);

      window.addEventListener('message', (event) => {
        if (event.origin !== new URL(iframe!.src).origin) return;

        if (event.data && event.data.type === 'resize') {
          const { width, height, isModalOpen, isMobile } = event.data;

          if (isMobile && isModalOpen) {
            iframe!.style.width = '100vw';
            iframe!.style.height = height;
            iframe!.style.top = '0px';
            iframe!.style.left = '0px';
            iframe!.style.bottom = 'unset';
            iframe!.style.right = 'unset';
          } else if (isModalOpen && !isMobile) {
            iframe!.style.width = width;
            iframe!.style.height = height;

            iframe!.style.bottom = isBottom ? '20px' : 'unset';
            iframe!.style.top = isBottom ? 'unset' : '20px';
            iframe!.style.left = isLeft ? '20px' : 'unset';
            iframe!.style.right = isLeft ? 'unset' : '20px';
          } else {
            iframe!.style.width = width;
            iframe!.style.height = height;

            iframe!.style.bottom = isBottom ? '0px' : 'unset';
            iframe!.style.top = isBottom ? 'unset' : '0px';
            iframe!.style.left = isLeft ? '0px' : 'unset';
            iframe!.style.right = isLeft ? 'unset' : '0px';
          }
        }
      });
    }
  }, []);

  return null;
}
