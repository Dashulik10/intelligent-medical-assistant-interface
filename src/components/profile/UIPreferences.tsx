"use client";

import { Palette, Bell, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "@/context/LanguageContext";
import { UIPreferencesProps } from "@/types";

export function UIPreferences({
    theme,
    notifications,
    language,
    onThemeChange,
    onLanguageChange,
    onNotificationChange,
}: UIPreferencesProps) {
    const { t } = useTranslation();
    const { uiPreferences, themes, languages } = t.profileConfig;

    return (
        <Card className="border-border/50 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy dark:text-white">
                    <Palette className="h-5 w-5" /> {uiPreferences.title}
                </CardTitle>
                <CardDescription>{uiPreferences.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-navy dark:text-white">{uiPreferences.theme}</Label>
                    <Select value={theme} onValueChange={onThemeChange}>
                        <SelectTrigger className="border-border dark:border-slate-700">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
                            {themes.map((t) => (
                                <SelectItem
                                    key={t}
                                    value={t}
                                    className="cursor-pointer focus:dark:bg-slate-800"
                                >
                                    {t.charAt(0).toUpperCase() + t.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Separator className="dark:bg-slate-800" />

                <div className="space-y-2">
                    <div className="mb-1 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-clinical" />
                        <Label className="text-navy dark:text-white">
                            {uiPreferences.language}
                        </Label>
                    </div>
                    <Select value={language} onValueChange={onLanguageChange}>
                        <SelectTrigger className="border-border dark:border-slate-700">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
                            {languages.map((lang) => (
                                <SelectItem
                                    key={lang.value}
                                    value={lang.value}
                                    className="cursor-pointer hover:bg-slate-light focus:dark:bg-slate-800"
                                >
                                    {lang.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-slate dark:text-slate-400">
                        {uiPreferences.languageDesc}
                    </p>
                </div>

                <Separator className="dark:bg-slate-800" />

                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                            <Bell className="h-4 w-4 text-clinical" />
                            <Label className="text-navy dark:text-white">
                                {uiPreferences.notifications}
                            </Label>
                        </div>
                        <p className="text-sm text-slate dark:text-slate-400">
                            {uiPreferences.notificationsDesc}
                        </p>
                    </div>
                    <Switch
                        checked={notifications}
                        onCheckedChange={onNotificationChange}
                        className="data-[state=checked]:bg-clinical dark:data-[state=unchecked]:bg-slate-700"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
