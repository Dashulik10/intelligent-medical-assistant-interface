import { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
    colorClass: string;
}

export interface BadgeItem {
    text: string;
    icon: LucideIcon;
    iconColor: string;
    bgColor: string;
    borderColor: string;
}

export interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface RegisterPayload {
    fullName: string;
    email: string;
    password: string;
}

export interface TopBarLabels {
    patientPrefix: string;
    selectPlaceholder: string;
    ageLabel: string;
    yearsSuffix: string;
    conditionLabel: string;
}

export interface AboutItem {
    title: string;
    description: string;
}
