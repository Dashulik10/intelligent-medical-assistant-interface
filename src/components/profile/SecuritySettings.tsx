"use client";

import { Shield, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SecuritySettings as SecuritySettingsType } from "@/types";
import { useTranslation } from "@/context/LanguageContext";

interface SecuritySettingsProps {
    data: SecuritySettingsType;
    onChange: (field: keyof SecuritySettingsType, value: string | boolean) => void;
}

export function SecuritySettings({ data, onChange }: SecuritySettingsProps) {
    const { t } = useTranslation();
    const { security, sessionTimeouts } = t.profileConfig;

    return (
        <Card className="border-border/50 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy dark:text-white">
                    <Shield className="h-5 w-5" /> {security.title}
                </CardTitle>
                <CardDescription className="dark:text-slate-400">
                    {security.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                            <Key className="h-4 w-4 text-clinical" />
                            <Label className="text-navy dark:text-white">
                                {security.twoFactor}
                            </Label>
                        </div>
                        <p className="text-sm text-slate dark:text-slate-400">
                            {security.twoFactorDesc}
                        </p>
                    </div>
                    <Switch
                        checked={data.twoFactorEnabled}
                        onCheckedChange={(v) => onChange("twoFactorEnabled", v)}
                        className="data-[state=checked]:bg-clinical dark:data-[state=unchecked]:bg-slate-700"
                    />
                </div>
                <Separator className="dark:bg-slate-800" />
                <div className="space-y-2">
                    <Label className="text-navy dark:text-white">{security.sessionTimeout}</Label>
                    <Select
                        value={data.sessionTimeout}
                        onValueChange={(v) => onChange("sessionTimeout", v)}
                    >
                        <SelectTrigger className="border-border dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
                            {sessionTimeouts.map((opt) => (
                                <SelectItem
                                    key={opt.value}
                                    value={opt.value}
                                    className="dark:text-white focus:dark:bg-slate-800"
                                >
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-slate dark:text-slate-400">
                        {security.sessionTimeoutDesc}
                    </p>
                </div>
                <Separator className="dark:bg-slate-800" />
                <Button
                    variant="outline"
                    className="border-border hover:bg-slate-light dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                    <Key className="mr-2 h-4 w-4" /> {security.changePassword}
                </Button>
            </CardContent>
        </Card>
    );
}
