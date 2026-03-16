import { Home, User as UserIcon, Settings, Brain, LogOut } from "lucide-react";
import { TopBarLabels } from "@/types/auth";

export const dashboardConfig = {
    sidebar: {
        brand: {
            name: "Медицинский Ассистент",
            icon: Brain,
        },
        historyTitle: "История документов",
        emptyHistoryText: "Документы еще не загружены",
        navItems: [
            { label: "Главная", href: "/dashboard", icon: Home },
            { label: "Профиль", href: "/doctor_profile", icon: UserIcon },
            { label: "Настройки", href: "/settings", icon: Settings },
        ],
        footer: {
            label: "Выйти",
            href: "/auth",
            icon: LogOut,
        },
        justNowText: "Только что",
    },
    topBar: {
        labels: {
            patientPrefix: "Пациент:",
            selectPlaceholder: "Выберите пациента",
            ageLabel: "Возраст",
            yearsSuffix: "лет",
            conditionLabel: "Состояние",
        } as TopBarLabels,
    },
};
