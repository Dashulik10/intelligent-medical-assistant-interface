"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChatMessage } from "./ChatMessage";
import { Message } from "@/types";

interface ChatInterfaceProps {
    messages: Message[];
    onSendMessage: (content: string) => void;
    onFileUpload: (files: FileList) => void;
    title: string;
    subtitle: string;
    placeholder: string;
}

export function ChatInterface({
    messages,
    onSendMessage,
    onFileUpload,
    title,
    subtitle,
    placeholder,
}: ChatInterfaceProps) {
    const [input, setInput] = useState("");
    const endRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        onSendMessage(input);
        setInput("");
    };

    return (
        <div className="bg-slate-lighter flex flex-1 flex-col overflow-hidden dark:bg-slate-950">
            <div className="flex items-center gap-3 border-b border-border bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="bg-clinical/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <MessageSquare className="h-5 w-5 text-clinical" />
                </div>
                <div>
                    <h2 className="font-semibold text-navy dark:text-white">{title}</h2>
                    <p className="text-xs text-slate dark:text-slate-400">{subtitle}</p>
                </div>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-5">
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}
                <div ref={endRef} />
            </div>

            <div className="border-t border-border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="relative mx-auto max-w-4xl">
                    <input
                        type="file"
                        multiple
                        ref={fileInputRef}
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files) onFileUpload(e.target.files);
                            e.target.value = "";
                        }}
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-slate hover:text-clinical dark:text-slate-400 dark:hover:text-clinical"
                    >
                        <Paperclip className="h-5 w-5" />
                    </Button>

                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())
                        }
                        placeholder={placeholder}
                        className="bg-slate-lighter min-h-[56px] resize-none rounded-xl border-2 border-border py-4 pl-12 pr-14 focus:border-clinical focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
                    />

                    <Button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="hover:bg-clinical/90 absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-lg bg-clinical p-0 text-white shadow-sm"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
