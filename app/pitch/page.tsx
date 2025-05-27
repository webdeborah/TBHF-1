import PDFViewer from "@/components/PDFViewer";

export const metadata = {
  title: "Pitch | The Black History Future",
  description: "View our pitch document",
};

export default function PitchPage() {
  return (
    <div className="container mx-auto h-screen flex flex-col px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-2">
        Charity Coin Pitch Document
      </h1>
      
      <p className="text-base md:text-lg text-gray-700 mb-4 text-center max-w-2xl mx-auto">
        Learn more about our mission and goals by viewing our pitch document.
      </p>
      
      <div className="flex-1 w-full h-[calc(100vh-180px)]">
        <PDFViewer 
          pdfPath="/CharityCoinPDF.pdf" 
          pdfName="CharityCoin Pitch Document" 
        />
      </div>
    </div>
  );
}