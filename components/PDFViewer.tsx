"use client";

interface PDFViewerProps {
  pdfPath: string;
  pdfName?: string;
}

const PDFViewer = ({ pdfPath }: PDFViewerProps) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
        <object
          data={pdfPath}
          type="application/pdf"
          className="w-full h-full"
        >
          <p>
            It appears your browser does not support embedded PDFs.{" "}
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
              Click here to view the PDF
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default PDFViewer;