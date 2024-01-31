"use client";
import { Viewer, Worker, ScrollMode } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ url }: any) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <Worker workerUrl="/pdf/pdf.worker.min.js">
            <Viewer
                fileUrl={url}
                plugins={[defaultLayoutPluginInstance]}
            />
        </Worker>
    );
};

export default PdfViewer;