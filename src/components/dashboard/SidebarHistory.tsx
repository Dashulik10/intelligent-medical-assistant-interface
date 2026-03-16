"use client";

import { FileText, CheckCircle2, Clock, AlertCircle, History } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocumentItem } from "@/types";

interface SidebarHistoryProps {
    documents: DocumentItem[];
    title: string;
    emptyStateText: string;
    justNowText: string;
}

export function SidebarHistory({
    documents,
    title,
    emptyStateText,
    justNowText,
}: SidebarHistoryProps) {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle2 className="h-4 w-4 text-mint" />;
            case "processing":
                return <Clock className="h-4 w-4 animate-spin text-yellow-500" />;
            default:
                return <AlertCircle className="h-4 w-4 text-red-500" />;
        }
    };

    const handleOpenDocument = (url?: string) => {
        if (url) window.open(url, "_blank");
    };

    return (
        <div className="flex flex-1 flex-col overflow-hidden p-6">
            <div className="mb-4 flex items-center gap-2 text-white/70">
                <History className="h-5 w-5" />
                <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <ScrollArea className="-mr-4 flex-1 pr-4">
                <div className="space-y-3 pb-4">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            onClick={() => handleOpenDocument(doc.url)}
                            className="group cursor-pointer rounded-lg border border-transparent bg-white/5 p-3 transition-all hover:border-white/10 hover:bg-white/10"
                        >
                            <div className="mb-2 flex items-start justify-between gap-2">
                                <div className="flex min-w-0 flex-1 items-center gap-2">
                                    <FileText className="h-4 w-4 flex-shrink-0 text-clinical" />
                                    <span className="truncate text-sm font-medium text-white/90 transition-colors group-hover:text-clinical">
                                        {doc.name}
                                    </span>
                                </div>
                                {getStatusIcon(doc.status)}
                            </div>
                            <div className="flex items-center justify-between text-xs text-white/50">
                                <span>{doc.size}</span>
                                <span>
                                    {doc.uploadedAt instanceof Date
                                        ? doc.uploadedAt.toLocaleTimeString([], {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                          })
                                        : justNowText}
                                </span>
                            </div>
                        </div>
                    ))}

                    {documents.length === 0 && (
                        <div className="rounded-xl border-2 border-dashed border-white/10 py-10 text-center text-xs text-white/30">
                            {emptyStateText}
                        </div>
                    )}
                </div>
            </ScrollArea>
        </div>
    );
}
