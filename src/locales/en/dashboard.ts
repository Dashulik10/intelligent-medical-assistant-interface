import { Home, User as UserIcon, Settings, Brain, LogOut } from "lucide-react";
import { TopBarLabels } from "@/types/auth";

export const dashboardConfig = {
    sidebar: {
        brand: {
            name: "Intelligent Medical Assistant",
            icon: Brain,
        },
        historyTitle: "Document History",
        emptyHistoryText: "No documents uploaded yet",
        navItems: [
            { label: "Dashboard", href: "/dashboard", icon: Home },
            { label: "Profile", href: "/doctor_profile", icon: UserIcon },
            { label: "Settings", href: "/settings", icon: Settings },
        ],
        footer: {
            label: "Sign Out",
            href: "/auth",
            icon: LogOut,
        },
        justNowText: "Just now",
    },
    topBar: {
        labels: {
            patientPrefix: "Patient:",
            selectPlaceholder: "Select patient",
            ageLabel: "Age",
            yearsSuffix: "years",
            conditionLabel: "Condition",
        } as TopBarLabels,
    },
};
