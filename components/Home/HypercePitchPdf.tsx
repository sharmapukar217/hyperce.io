'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
// import { useSwipeable } from 'react-swipeable';
// import { useRef, useState, useEffect, useCallback } from 'react';

// function debounce(func: (...args: any[]) => unknown, delay = 200) {
//   let timeoutId: NodeJS.Timeout;

//   return function (...args: any[]) {
//     // Clear the previous timeout
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     // Set a new timeout
//     timeoutId = setTimeout(() => {
//       func(args);
//     }, delay);
//   };
// }

export default function HypercePitchPdf() {
  // const [pdfDoc, setPdfDoc] = useState<any>(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const containerRef = useRef<HTMLDivElement | null>(null);

  // const renderPage = useCallback(
  //   async (num = 1, pdf: any) => {
  //     if (!pdf) return;

  //     // Load page
  //     const page = await pdf.getPage(num);

  //     // Set up canvas
  //     if (!canvasRef.current) return;

  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext('2d');

  //     const viewport = page.getViewport({ scale: 1 });

  //     const containerWidth = containerRef.current?.clientWidth || 0;
  //     const devicePixelRatio = window.devicePixelRatio || 1;
  //     const scale = containerWidth / viewport.width;

  //     const scaledViewport = page.getViewport({ scale: scale });

  //     canvas.width = containerWidth;
  //     canvas.height = scaledViewport.height;

  //     await page.render({ viewport: scaledViewport, canvasContext: context })
  //       .promise;
  //   },
  //   [canvasRef, containerRef]
  // );

  // const handlePrevPage = useCallback(() => {
  //   if (pageNumber <= 1) return;
  //   setPageNumber(pageNumber - 1);
  //   renderPage(pageNumber - 1, pdfDoc);
  // }, [pageNumber, renderPage]);

  // const handleNextPage = useCallback(() => {
  //   if (!pdfDoc || pageNumber >= pdfDoc.numPages) return;
  //   setPageNumber(pageNumber + 1);
  //   renderPage(pageNumber + 1, pdfDoc);
  // }, [pageNumber, pdfDoc, renderPage]);

  // const swipeHandlers = useSwipeable({
  //   trackMouse: true,
  //   preventScrollOnSwipe: true,
  //   onSwipedLeft: handleNextPage,
  //   onSwipedRight: handlePrevPage
  // });

  // useEffect(() => {
  //   // const loadPdf = async () => {
  //   //   // @ts-ignore
  //   //   const pdfjsLib = await import('pdfjs-dist/webpack');

  //   //   // prettier ignore
  //   //   pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.0.0/build/pdf.worker.min.js';
  //   //   const pdf = await pdfjsLib.getDocument('/HypercePitch.pdf').promise;

  //   //   // setPdfDoc(pdf);
  //   //   // renderPage(1, pdf);
  //   // };

  //   // // loadPdf();
  //   // // window.addEventListener('resize', () => debounce(loadPdf));
  //   // return () => {
  //   //   // window.removeEventListener('resize', () => debounce(loadPdf));
  //   // };
  // }, []);

  // if (!pdfDoc) return;

  return (
    <section className="mx-auto container px-10 lg:px-20 py-12 md:py-16 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
        HypercePitch
      </h2>
      <div className="flex mt-5 justify-center px-10 mb-10">
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400 w-full lg:w-2/3 text-center">
          See more about us, our services, our mission & visions and our
          teams...
        </span>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto h-full">
        <div className="mt-5 relative">
          <Link
            href="/HypercePitch.pdf"
            target="_blank"
            className="absolute top-2 right-2 z-50 bg-black/40 hover:bg-black/60 h-10 w-10 flex items-center justify-center rounded-[8px] shadow-sm backdrop-blur-sm"
          >
            <ExternalLink className="h-6 w-6" />
          </Link>

          <Image
            src="/HypercePitchThumbnail.jpg"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            width={500}
            height={300}
          />
        </div>
      </div>

      {/*<div
        ref={containerRef}
        className="relative w-full md:w-2/3 lg:w-1/2 mx-auto min-h-px"
      >
        <Link
          href="/HypercePitch.pdf"
          target="_blank"
          className="absolute top-7 right-2 z-50 bg-black/40 hover:bg-black/60 h-10 w-10 flex items-center justify-center rounded-[8px] shadow-sm backdrop-blur-sm"
        >
          <ExternalLink className="h-6 w-6" />
        </Link>
        <div className="mt-5" {...swipeHandlers}>
          <canvas ref={canvasRef}></canvas>
          <div className="flex gap-8 mt-4 items-center justify-center">
            <button
              className="disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => handlePrevPage()}
              disabled={pageNumber <= 1}
            >
              Previous page
            </button>

            <div>
              {pageNumber} / {pdfDoc.numPages}
            </div>

            <button
              className="disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => handleNextPage()}
              disabled={pageNumber >= pdfDoc.numPages}
            >
              Next page
            </button>
          </div>
        </div>
      </div>*/}
    </section>
  );
}
