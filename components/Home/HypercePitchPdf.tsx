'use client';
import { useSwipeable } from 'react-swipeable';
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { useRef, useState, useEffect, useCallback } from 'react';

export default function HypercePitchPdf() {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const renderPage = useCallback(
    async (num = 1, pdf: any) => {
      if (!pdf) return;

      // Load page
      const page = await pdf.getPage(num);

      // Set up canvas
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ viewport: viewport, canvasContext: context }).promise;
    },
    [canvasRef]
  );

  const handlePrevPage = useCallback(() => {
    if (pageNumber <= 1) return;
    setPageNumber(pageNumber - 1);
    renderPage(pageNumber - 1, pdfDoc);
  }, [pageNumber, renderPage]);

  const handleNextPage = useCallback(() => {
    if (!pdfDoc || pageNumber >= pdfDoc.numPages) return;
    setPageNumber(pageNumber + 1);
    renderPage(pageNumber + 1, pdfDoc);
  }, [pageNumber, pdfDoc, renderPage]);

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    preventScrollOnSwipe: true,
    onSwipedLeft: handleNextPage,
    onSwipedRight: handlePrevPage
  });

  useEffect(() => {
    const loadPdf = async () => {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://unpkg.com/pdfjs-dist@3.0.0/build/pdf.worker.min.js';
      const pdf = await pdfjsLib.getDocument('/HypercePitch.pdf').promise;

      setPdfDoc(pdf);
      renderPage(1, pdf);
    };

    loadPdf();
  }, []);

  if (!pdfDoc) return;

  return (
    <section className="mx-auto container px-10 lg:px-20 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
        HypercePitch
      </h2>
      <div className="flex mt-5 justify-center px-10 mb-10">
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400 w-full lg:w-2/3 text-center">
          See more about us, our services, our mission & visions and our
          teams...
        </span>
      </div>

      <div className="relative mt-10 w-fit mx-auto" {...swipeHandlers}>
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
    </section>
  );
}
