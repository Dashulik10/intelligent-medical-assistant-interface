"use client";

import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

export function SSOButtons() {
    const { t } = useTranslation();
    const { sso } = t.authConfig;

    return (
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs uppercase text-slate dark:bg-slate-800 dark:text-slate-400">
                        {sso.dividerText}
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                className="mt-4 w-full border-border hover:bg-slate-light"
                onClick={() => {}}
            >
                <Building2 className="mr-2 h-4 w-4" />
                {sso.buttonText}
            </Button>
        </div>
    );
}
