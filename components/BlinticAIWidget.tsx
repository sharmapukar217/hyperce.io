'use client';
import React, { useState, useEffect, useRef } from 'react';

/**
 * Blintic AI Chat Widget Component
 *
 * This component renders a chat interface in an iframe that expands when clicked.
 * It works in both client and server-side rendering applications.
 *
 * @param {Object} props
 * @param {string} props.baseUrl - The base URL of your Blintic AI instance
 * @param {string} props.projectId - Your Blintic AI project ID
 * @param {string} props.apiKey - Your project's API key
 * @param {string} props.position - Position of the chat widget: 'bottom-right' (default) or 'bottom-left'
 * @returns {React.ReactElement|null}
 */
const BlinticAIWidget = ({
  baseUrl,
  projectId,
  apiKey,
  position = 'bottom-right'
}: {
  baseUrl: string;
  projectId: string;
  apiKey: string;
  position?: string;
}) => {
  const [iframeSize, setIframeSize] = useState({
    width: '80px',
    height: '80px'
  });
  const [iframeSrc, setIframeSrc] = useState('');
  const iframeRef = useRef(null);

  // Calculate iframe URL on client-side to avoid hydration mismatch
  useEffect(() => {
    // Construct the iframe URL with all necessary parameters
    setIframeSrc(
      `${baseUrl}/iframe/${projectId}?apiKey=${apiKey}&pos=${position}`
    );
  }, [projectId, apiKey, position, baseUrl]);

  // Simplified listener for iframe messages
  useEffect(() => {
    if (!iframeSrc) return;

    const expectedOrigin = new URL(iframeSrc).origin;
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== expectedOrigin) return; // Security check

      // Handle resize messages with dynamic sizing support
      if (event.data?.type === 'resize') {
        const { width, height, isModalOpen, isMobile } = event.data;

        if (isMobile && isModalOpen) {
          // Mobile: Full screen with dynamic height
          setIframeSize({ width: '100vw', height: height }); // Use dynamic height from iframe
        } else {
          // Desktop modal or collapsed state (supports dynamic sizing for initial messages)
          setIframeSize({ width, height });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [iframeSrc]);

  // Simplified position styles
  const isBottom = position.includes('bottom');
  const isLeft = position.includes('left');
  const isMobileModalOpen = iframeSize.width === '100vw';

  const positionStyle: React.CSSProperties = {
    position: 'fixed',
    ...(isMobileModalOpen
      ? {
          top: '0px',
          left: '0px',
          bottom: 'unset',
          right: 'unset'
        }
      : {
          bottom: isBottom ? '0px' : 'unset',
          top: isBottom ? 'unset' : '0px',
          left: isLeft ? '0px' : 'unset',
          right: isLeft ? 'unset' : '0px'
        })
  };

  if (!iframeSrc) return null;

  return (
    <iframe
      ref={iframeRef}
      src={iframeSrc}
      title="Blintic AI Chat Widget"
      style={{
        ...positionStyle,
        width: iframeSize.width,
        height: iframeSize.height,
        border: '0px',
        margin: '0px',
        padding: '0px',
        display: 'block',
        outline: 'none',
        zIndex: 2147483640,
        background: 'transparent'
      }}
      allow="microphone; camera"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
};

export default BlinticAIWidget;
