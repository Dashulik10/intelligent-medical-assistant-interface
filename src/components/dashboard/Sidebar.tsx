"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DocumentItem } from "@/types";
import { SidebarData } from "@/types/sidebar";
import { SidebarNav } from "./SidebarNav";
import { SidebarHistory } from "./SidebarHistory";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    data: SidebarData;
    documents: DocumentItem[];
}

export function Sidebar({ isOpen, onClose, data, documents }: SidebarProps) {
    const BrandIcon = data.brand.icon;
    const FooterIcon = data.footer.icon;

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />
            )}

            <aside
                className={cn(
                    "fixed z-50 flex h-full w-80 flex-col bg-navy text-white transition-transform duration-300 md:relative",
                    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                <div className="border-b border-white/10 p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical">
                                <BrandIcon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-semibold">{data.brand.name}</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="text-white hover:bg-white/10 md:hidden"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <SidebarNav items={data.navItems} />
                </div>

                <SidebarHistory
                    documents={documents}
                    title={data.historyTitle}
                    emptyStateText={data.emptyHistoryText}
                    justNowText={data.justNowText}
                />

                <div className="border-t border-white/10 p-6">
                    <Link
                        href={data.footer.href}
                        className="group flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <FooterIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span>{data.footer.label}</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
