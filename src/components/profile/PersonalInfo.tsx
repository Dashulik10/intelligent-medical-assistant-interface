"use client";

import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserProfile } from "@/types";
import { useTranslation } from "@/context/LanguageContext";

interface PersonalInfoProps {
    data: UserProfile;
    onChange: (field: keyof UserProfile, value: string) => void;
}

export function PersonalInfo({ data, onChange }: PersonalInfoProps) {
    const { t } = useTranslation();
    const { personalInfo, specializations } = t.profileConfig;

    return (
        <Card className="border-border/50 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy dark:text-white">
                    <User className="h-5 w-5" /> {personalInfo.title}
                </CardTitle>
                <CardDescription className="dark:text-slate-400">
                    {personalInfo.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="dark:text-slate-200">{personalInfo.fullName}</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => onChange("name", e.target.value)}
                            className="dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="dark:text-slate-200">{personalInfo.email}</Label>
                        <Input
                            type="email"
                            value={data.email}
                            onChange={(e) => onChange("email", e.target.value)}
                            className="dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="dark:text-slate-200">{personalInfo.specialization}</Label>
                        <Select
                            value={data.specialization}
                            onValueChange={(v) => onChange("specialization", v)}
                        >
                            <SelectTrigger className="dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
                                {specializations.map((s) => (
                                    <SelectItem
                                        key={s}
                                        value={s}
                                        className="dark:text-white focus:dark:bg-slate-800"
                                    >
                                        {s}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label className="dark:text-slate-200">{personalInfo.licenseNumber}</Label>
                        <Input
                            value={data.licenseNumber}
                            onChange={(e) => onChange("licenseNumber", e.target.value)}
                            className="dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
