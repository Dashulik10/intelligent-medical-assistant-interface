"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Message } from "@/types";

export function ChatMessage({ message }: { message: Message }) {
    const { t } = useTranslation();

    const config = t.chatConfig.roles[message.role];
    const Icon = config.icon;

    return (
        <div className={`flex gap-3 ${config.containerClass}`}>
            {message.role === "assistant" && (
                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white shadow-sm ${config.iconClass}`}
                >
                    <Icon className="h-5 w-5" />
                </div>
            )}

            <div className={`max-w-[80%] rounded-xl border p-4 shadow-sm ${config.bubbleClass}`}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                <p className={`mt-2 text-xs ${config.timeClass}`}>
                    {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>

            {message.role === "user" && (
                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white shadow-sm ${config.iconClass}`}
                >
                    <Icon className="h-5 w-5" />
                </div>
            )}
        </div>
    );
}
