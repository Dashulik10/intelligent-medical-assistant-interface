"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useTranslation();

    const { about } = t.siteConfig;

    const Icon = about.icon;

    return (
        <div className="bg-slate-lighter min-h-screen px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <Icon className={`mx-auto mb-4 h-12 w-12 ${about.iconColor}`} />
                    <h1 className="mb-4 text-4xl font-bold text-navy dark:text-white">
                        {about.title}
                    </h1>
                </div>

                <div className="space-y-8 rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900 md:p-12">
                    {about.sections.map((section: any, index: number) => (
                        <section key={index}>
                            <h2 className="mb-4 text-2xl font-semibold text-navy dark:text-white">
                                {section.title}
                            </h2>
                            <p className="leading-relaxed text-slate dark:text-slate-400">
                                {section.description}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
