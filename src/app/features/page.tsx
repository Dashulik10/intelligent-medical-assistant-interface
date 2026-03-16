"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/context/LanguageContext";

export default function FeaturesPage() {
    const { t } = useTranslation();

    const { featuresPage } = t.siteConfig;

    return (
        <div className="bg-slate-lighter min-h-screen px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-navy dark:text-white">
                        {featuresPage.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate dark:text-slate-400">
                        {featuresPage.subtitle}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {featuresPage.items.map((feature: any, index: number) => {
                        const Icon = feature.icon;

                        return (
                            <Card
                                key={index}
                                className="border-border/50 bg-white transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                            >
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="bg-clinical/10 flex h-12 w-12 items-center justify-center rounded-lg dark:bg-slate-800">
                                        <Icon className="h-6 w-6 text-clinical" />
                                    </div>
                                    <CardTitle className="text-xl text-navy dark:text-white">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate dark:text-slate-400">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
