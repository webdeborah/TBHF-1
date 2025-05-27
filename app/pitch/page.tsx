import PDFViewer from "@/components/PDFViewer";

export const metadata = {
  title: "Pitch | The Black History Future",
  description: "View our pitch document",
};

export default function PitchPage() {
  return (
    <div className="container mx-auto h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center my-4">
        Charity Coin Pitch Document
      </h1>
      
      <p className="text-lg text-gray-700 mb-4 text-center">
        Learn more about our mission and goals by viewing our pitch document.
      </p>
      
      <div className="flex-1 w-full">
        <PDFViewer 
          pdfPath="/CharityCoinPDF.pdf" 
          pdfName="CharityCoin Pitch Document" 
        />
      </div>
    </div>
  );
}