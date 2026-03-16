"use client";

import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { DocumentItem, Message } from "@/types";

import { mockPatients } from "@/mocks/patients";
import { mockInitialMessages } from "@/mocks/chat";

import { useTranslation } from "@/context/LanguageContext";

export default function DashboardPage() {
    const [documents, setDocuments] = useState<DocumentItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState("P001");
    const [messages, setMessages] = useState<Message[]>(mockInitialMessages);

    const { t } = useTranslation();

    useEffect(() => {
        const savedDocs = localStorage.getItem("medical_docs");

        if (savedDocs) {
            try {
                const parsed = JSON.parse(savedDocs) as DocumentItem[];
                const docsWithDates = parsed.map((doc) => ({
                    ...doc,
                    uploadedAt: new Date(doc.uploadedAt),
                }));

                setDocuments(docsWithDates);
            } catch (e) {
                console.error("Failed to parse documents", e);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("medical_docs", JSON.stringify(documents));
        }
    }, [documents, isLoaded]);

    const handleFileUpload = useCallback((files: FileList) => {
        Array.from(files).forEach((file) => {
            const newDoc: DocumentItem = {
                id: Date.now().toString() + Math.random(),
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
                uploadedAt: new Date(),
                status: "processing",
                url: URL.createObjectURL(file),
            };

            setDocuments((prev) => [newDoc, ...prev]);

            setTimeout(() => {
                setDocuments((prev) =>
                    prev.map((doc) =>
                        doc.id === newDoc.id ? { ...doc, status: "completed" } : doc
                    )
                );
            }, 2000);
        });
    }, []);

    const handleSendMessage = (content: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: content,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMsg]);

        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Data received. I am analyzing the clinical patterns.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMsg]);
        }, 1000);
    };

    if (!isLoaded) return null;

    return (
        <div className="bg-slate-lighter flex h-screen overflow-hidden text-navy">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
                data={t.dashboardConfig.sidebar}
                documents={documents}
            />

            <main className="flex min-w-0 flex-1 flex-col">
                <TopBar
                    onMenuClick={() => setSidebarOpen(true)}
                    selectedPatientId={selectedPatient}
                    onPatientChange={setSelectedPatient}
                    patients={mockPatients}
                    labels={t.dashboardConfig.topBar.labels}
                />

                <ChatInterface
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    onFileUpload={handleFileUpload}
                    title={t.chatConfig.header.title}
                    subtitle={t.chatConfig.header.subtitle}
                    placeholder={t.chatConfig.input.placeholder}
                />
            </main>
        </div>
    );
}
