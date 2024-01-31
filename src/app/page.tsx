import PdfViewer from "./pages/PdfViewer";

export default function Home() {
  return (
    <>
      <div style={{display: "flex", width: "100%", maxHeight:"100vh", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "1000px", height:"80vh"}}>
          <PdfViewer url={"/document.pdf"} />
        </div>
      </div>
    </>
  );
}
