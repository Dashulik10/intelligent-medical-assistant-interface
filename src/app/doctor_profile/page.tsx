"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brain, ArrowLeft, CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ProfileOverview } from "@/components/profile/ProfileOverview";
import { PersonalInfo } from "@/components/profile/PersonalInfo";
import { SecuritySettings } from "@/components/profile/SecuritySettings";
import { SystemIntegrations } from "@/components/profile/SystemIntegrations";
import { UIPreferences } from "@/components/profile/UIPreferences";

import { useTranslation } from "@/context/LanguageContext";
import { useTheme } from "next-themes";

import {
    UserProfile,
    SecuritySettings as SecuritySettingsType,
    IntegrationSettings,
} from "@/types";

export default function ProfilePage() {
    const router = useRouter();
    const [saveSuccess, setSaveSuccess] = useState(false);

    const { t, language, setLanguage } = useTranslation();
    const { pageHeader } = t.profileConfig;
    const { theme, setTheme } = useTheme();

    const [profile, setProfile] = useState<UserProfile>({
        name: "Dr. Emily Johnson",
        email: "emily.johnson@hospital.com",
        specialization: "Cardiology",
        licenseNumber: "MED-45678-2020",
        institution: "Central Medical Hospital",
    });

    const [security, setSecurity] = useState<SecuritySettingsType>({
        twoFactorEnabled: true,
        sessionTimeout: "30",
    });

    const [integrations, setIntegrations] = useState<IntegrationSettings>({
        ehrIntegration: true,
        labSystemIntegration: false,
        imagingIntegration: true,
    });

    const [notifications, setNotifications] = useState(true);

    const handleProfileChange = (field: keyof UserProfile, value: string) => {
        setProfile((prev) => ({ ...prev, [field]: value }));
    };

    const handleSecurityChange = (field: keyof SecuritySettingsType, value: string | boolean) => {
        setSecurity((prev) => ({ ...prev, [field]: value }));
    };

    const handleIntegrationChange = (field: keyof IntegrationSettings, value: boolean) => {
        setIntegrations((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    return (
        <div className="bg-slate-lighter min-h-screen dark:bg-slate-950">
            <header className="sticky top-0 z-10 border-b border-border/50 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="container mx-auto flex items-center justify-between px-8 py-4">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push("/dashboard")}
                            className="text-navy dark:text-white dark:hover:bg-slate-800"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy dark:bg-clinical">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="hidden font-semibold text-navy dark:text-white sm:block">
                                {pageHeader.title}
                            </h1>
                        </div>
                    </div>
                    <Button
                        onClick={handleSave}
                        className="bg-clinical text-white"
                        disabled={saveSuccess}
                    >
                        {saveSuccess ? (
                            <>
                                <CheckCircle2 className="mr-2 h-4 w-4" /> {pageHeader.saved}
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" /> {pageHeader.save}
                            </>
                        )}
                    </Button>
                </div>
            </header>

            <main className="container mx-auto max-w-6xl px-8 py-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    <ProfileOverview profile={profile} />

                    <div className="space-y-6 lg:col-span-2">
                        <PersonalInfo data={profile} onChange={handleProfileChange} />
                        <SecuritySettings data={security} onChange={handleSecurityChange} />
                        <SystemIntegrations
                            data={integrations}
                            onChange={handleIntegrationChange}
                        />
                        <UIPreferences
                            theme={theme || "system"}
                            notifications={notifications}
                            language={language}
                            onThemeChange={setTheme}
                            onNotificationChange={setNotifications}
                            onLanguageChange={(val) => setLanguage(val as "en" | "ru")}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
