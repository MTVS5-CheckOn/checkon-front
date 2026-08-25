import { cn } from "@/ui/utils/tailwind/cn";
import { useState } from "react";
import { Document, Page as PdfPage, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

// console.log(pdfjs.version);
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/${pdfjs.version}/build/pdf.worker.min.mjs`;

const SAMPLE_PDF_URL = "/sample.pdf";

export const PdfRenderer = () => {
  const [numPages, setNumPages] = useState(0);

  const handleDocumentLoadSuccess = ({
    numPages: loadedPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(loadedPages);
  };

  return (
    <Document
      file={SAMPLE_PDF_URL}
      onLoadSuccess={handleDocumentLoadSuccess}
      loading={
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          PDF를 불러오는 중입니다.
        </span>
      }
      error={
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__red-500",
          )}
        >
          PDF를 불러오지 못했습니다.
        </span>
      }
    >
      {Array.from({ length: numPages }, (_, index) => (
        <PdfPage
          key={`page-${index + 1}`}
          pageNumber={index + 1}
          className={cn(
            "border-ods__border border",
            //
            index < numPages - 1 && "mb-4",
          )}
          width={800}
        />
      ))}
    </Document>
  );
};

export default PdfRenderer;
