"use client";
import { useState, useEffect } from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

interface PDFViewerProps {
  pdfPath: string;
  pdfName?: string;
}

const PDFViewer = ({ pdfPath, pdfName = "document" }: PDFViewerProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex-1 h-full rounded-lg overflow-hidden shadow-lg">
        {isMobile ? (
          <div className="w-full h-full bg-gray-100 p-6 flex flex-col items-center justify-center text-center">
            <p className="mb-6 text-gray-700">
              For the best experience with our pitch document on mobile devices,
              we recommend downloading it.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href={pdfPath}
                download={pdfName}
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg shadow-md font-medium hover:opacity-90 hover:text-white/60 transition-all active:scale-95 w-full"
              >
                <FaDownload className="mr-1" /> Download PDF
              </a>
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 px-6 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-sm font-medium hover:bg-gray-50 transition-all w-full"
              >
                <FaExternalLinkAlt className="mr-1" /> Open in New Tab
              </a>
            </div>
          </div>
        ) : (
          <object
            data={pdfPath}
            type="application/pdf"
            className="w-full h-full"
            style={{ height: "100%" }}
          >
            <p>
              It appears your browser does not support embedded PDFs.{" "}
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Click here to view the PDF
              </a>
            </p>
          </object>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
