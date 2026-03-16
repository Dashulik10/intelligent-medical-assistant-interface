export interface DocumentItem {
    id: string;
    name: string;
    size: string;
    uploadedAt: Date;
    status: "processing" | "completed" | "error";
    url?: string;
}

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: "male" | "female" | "other";
    condition: string;
    lastVisit: string;
    status: "active" | "discharged" | "critical";
    avatarUrl?: string;
}

export interface UserProfile {
    name: string;
    email: string;
    specialization: string;
    licenseNumber: string;
    institution: string;
}

export interface SecuritySettings {
    twoFactorEnabled: boolean;
    sessionTimeout: string;
}

export interface IntegrationSettings {
    ehrIntegration: boolean;
    labSystemIntegration: boolean;
    imagingIntegration: boolean;
}

export interface UIPreferencesProps {
    theme: string;
    notifications: boolean;
    language: string;
    onThemeChange: (val: string) => void;
    onNotificationChange: (val: boolean) => void;
    onLanguageChange: (val: string) => void;
}
