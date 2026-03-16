import { DocumentItem } from "@/types";

export const mockDocuments: DocumentItem[] = [
    {
        id: "1",
        name: "Blood_Test_Results.pdf",
        size: "2.4 MB",
        uploadedAt: new Date(Date.now() - 3600000),
        status: "completed",
    },
    {
        id: "2",
        name: "MRI_Scan_Report.pdf",
        size: "8.1 MB",
        uploadedAt: new Date(Date.now() - 7200000),
        status: "completed",
    },
];
