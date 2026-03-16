import { Brain, Home, User, Settings, LogOut } from "lucide-react";
import { SidebarData } from "@/types/sidebar";

export const mockSidebarData: SidebarData = {
    brand: {
        name: "Medical assistant",
        icon: Brain,
    },
    historyTitle: "Document History",
    navItems: [
        { label: "Dashboard", href: "/dashboard", icon: Home },
        { label: "Profile", href: "/doctor_profile", icon: User },
        { label: "Settings", href: "/settings", icon: Settings },
    ],
    footer: {
        label: "Sign Out",
        href: "/auth",
        icon: LogOut,
    },
    emptyHistoryText: "...",
};
