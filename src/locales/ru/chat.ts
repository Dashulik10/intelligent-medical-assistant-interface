import { Brain, User } from "lucide-react";

export const chatConfig = {
    header: {
        title: "ИИ Диагностический Ассистент",
        subtitle: "Контекстно-зависимый анализ",
    },
    input: {
        placeholder: "Введите ваш медицинский запрос...",
    },
    roles: {
        assistant: {
            icon: Brain,
            containerClass: "justify-start",
            bubbleClass: "bg-clinical text-white",
            iconClass: "text-clinical border-clinical/20",
            timeClass: "text-slate",
        },
        user: {
            icon: User,
            containerClass: "justify-end",
            bubbleClass:
                "bg-white text-navy dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200",
            iconClass: "text-mint border-mint/20",
            timeClass: "text-white/70",
        },
    },
};
