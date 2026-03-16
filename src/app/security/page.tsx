"use client";

import { ShieldCheck, Lock, Server, FileKey } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/context/LanguageContext";

const SECURITY_ICONS = [Lock, FileKey, Server];

export default function SecurityPage() {
    const { t } = useTranslation();
    const { securityPage } = t.siteConfig;

    return (
        <div className="bg-slate-lighter min-h-screen px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <ShieldCheck className="mx-auto mb-4 h-16 w-16 text-clinical" />
                    <h1 className="mb-4 text-4xl font-bold text-navy dark:text-white">
                        {securityPage.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate dark:text-slate-400">
                        {securityPage.subtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    {securityPage.items.map((item: any, idx: number) => {
                        const Icon = SECURITY_ICONS[idx];

                        return (
                            <Card
                                key={idx}
                                className="border-border/50 bg-white transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                            >
                                <CardContent className="flex items-start gap-4 p-6">
                                    <div className="mt-1 rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                                        <Icon className="h-6 w-6 text-navy dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-navy dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate dark:text-slate-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
