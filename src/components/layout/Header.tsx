"use client";
import Link from "next/link";
import { Brain } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function Header() {
    const { t } = useTranslation();
    const siteConfig = t.siteConfig;

    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-white text-navy dark:bg-navy dark:text-white">
            <div className="container mx-auto flex items-center justify-between px-8 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                        <Brain className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-navy dark:text-white">
                        {siteConfig.name}
                    </span>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    {siteConfig.navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-slate transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
