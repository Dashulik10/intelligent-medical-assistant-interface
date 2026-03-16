"use client";

import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { IntegrationSettings } from "@/types";
import { useTranslation } from "@/context/LanguageContext";

interface SystemIntegrationsProps {
    data: IntegrationSettings;
    onChange: (field: keyof IntegrationSettings, value: boolean) => void;
}

export function SystemIntegrations({ data, onChange }: SystemIntegrationsProps) {
    const { t } = useTranslation();
    const { integrations } = t.profileConfig;

    return (
        <Card className="border-border/50 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy dark:text-white">
                    <Building2 className="h-5 w-5" /> {integrations.title}
                </CardTitle>
                <CardDescription>{integrations.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Label className="text-navy dark:text-white">{integrations.ehr}</Label>
                        <p className="text-sm text-slate dark:text-slate-400">
                            {integrations.ehrDesc}
                        </p>
                    </div>
                    <Switch
                        checked={data.ehrIntegration}
                        onCheckedChange={(v) => onChange("ehrIntegration", v)}
                        className="data-[state=checked]:bg-clinical dark:data-[state=unchecked]:bg-slate-700"
                    />
                </div>

                <Separator className="dark:bg-slate-800" />

                <div className="flex items-center justify-between">
                    <div>
                        <Label className="text-navy dark:text-white">{integrations.lab}</Label>
                        <p className="text-sm text-slate dark:text-slate-400">
                            {integrations.labDesc}
                        </p>
                    </div>
                    <Switch
                        checked={data.labSystemIntegration}
                        onCheckedChange={(v) => onChange("labSystemIntegration", v)}
                        className="data-[state=checked]:bg-clinical"
                    />
                </div>

                <Separator className="dark:bg-slate-800" />

                <div className="flex items-center justify-between">
                    <div>
                        <Label className="text-navy dark:text-white">{integrations.imaging}</Label>
                        <p className="text-sm text-slate dark:text-slate-400">
                            {integrations.imagingDesc}
                        </p>
                    </div>
                    <Switch
                        checked={data.imagingIntegration}
                        onCheckedChange={(v) => onChange("imagingIntegration", v)}
                        className="data-[state=checked]:bg-clinical dark:data-[state=unchecked]:bg-slate-700"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
