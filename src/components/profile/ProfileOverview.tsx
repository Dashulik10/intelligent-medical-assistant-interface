"use client";

import { User, Mail, IdCard, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserProfile } from "@/types";
import { useTranslation } from "@/context/LanguageContext";

interface ProfileOverviewProps {
    profile: UserProfile;
}

export function ProfileOverview({ profile }: ProfileOverviewProps) {
    const { t } = useTranslation();
    const { overview } = t.profileConfig;

    return (
        <div className="space-y-6">
            <Card className="border-border/50 shadow-md dark:border-slate-800 dark:bg-slate-900">
                <CardHeader className="pb-4 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-clinical to-mint">
                        <User className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-navy dark:text-white">{profile.name}</CardTitle>
                    <CardDescription className="text-slate dark:text-slate-400">
                        {profile.specialization}
                    </CardDescription>
                    <Badge className="bg-mint/10 border-mint/20 mx-auto mt-2 text-mint">
                        {overview.verifiedBadge}
                    </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-slate dark:text-slate-400" />
                        <span className="text-navy dark:text-slate-200">{profile.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <IdCard className="h-4 w-4 text-slate dark:text-slate-400" />
                        <span className="text-navy dark:text-slate-200">
                            {profile.licenseNumber}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Building2 className="h-4 w-4 text-slate dark:text-slate-400" />
                        <span className="text-navy dark:text-slate-200">{profile.institution}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
