"use client";

import { useTranslation } from "@/context/LanguageContext";

export function TextSection() {
    const { t } = useTranslation();
    const siteConfig = t.siteConfig;

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
                {siteConfig.badges.map((badge, index) => (
                    <div
                        key={index}
                        className={`bg-mint/10 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${badge.borderColor}`}
                    >
                        <badge.icon className={`h-4 w-4 ${badge.iconColor}`} />
                        <span className={`bg-mint/10 text-sm font-medium ${badge.iconColor}`}>
                            {badge.text}
                        </span>
                    </div>
                ))}
            </div>

            <h1 className="text-5xl font-bold leading-tight text-navy dark:text-white">
                {siteConfig.mainText}
            </h1>

            <p className="text-lg leading-relaxed text-slate dark:text-slate-300">
                {siteConfig.description}
            </p>

            <div className="grid gap-6 pt-4 sm:grid-cols-2">
                {siteConfig.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                        <div
                            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.colorClass.split(" ")[1]}`}
                        >
                            <feature.icon
                                className={`h-6 w-6 ${feature.colorClass.split(" ")[0]}`}
                            />
                        </div>
                        <div>
                            <h3 className="mb-1 font-semibold text-navy dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate dark:text-slate-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
