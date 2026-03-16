"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/sidebar";

interface SidebarNavProps {
    items: NavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <nav className="space-y-2">
            {items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-4 py-2.5 transition-colors",
                            isActive
                                ? "bg-white/10 text-white"
                                : "text-white/70 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
