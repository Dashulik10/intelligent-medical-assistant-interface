import { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface SidebarFooterData {
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface SidebarBrandData {
    name: string;
    icon: LucideIcon;
}

export interface SidebarData {
    brand: SidebarBrandData;
    historyTitle: string;
    navItems: NavItem[];
    footer: SidebarFooterData;
    emptyHistoryText: string;
    justNowText: string;
}
