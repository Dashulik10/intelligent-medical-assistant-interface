"use client";

import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Patient } from "@/types";
import { TopBarLabels } from "@/types/auth";

interface TopBarProps {
    onMenuClick: () => void;
    selectedPatientId: string;
    onPatientChange: (id: string) => void;
    patients: Patient[];
    labels: TopBarLabels;
}

export function TopBar({
    onMenuClick,
    selectedPatientId,
    onPatientChange,
    patients,
    labels,
}: TopBarProps) {
    const currentPatient = patients.find((p) => p.id === selectedPatientId) || patients[0];
    if (!currentPatient) return null;

    return (
        <header className="relative z-30 flex-shrink-0 border-b border-border bg-white px-5 py-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:px-8">
            <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuClick}
                        className="flex-shrink-0 text-navy dark:text-white dark:hover:bg-slate-800 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <div className="flex min-w-0 flex-1 items-center gap-3">
                        <div className="flex flex-shrink-0 items-center gap-2 text-sm text-slate dark:text-slate-400">
                            <User className="h-4 w-4" />
                            <span className="hidden sm:inline">{labels.patientPrefix}</span>
                        </div>

                        <Select value={selectedPatientId} onValueChange={onPatientChange}>
                            <SelectTrigger className="border-clinical/20 hover:border-clinical/40 focus:ring-clinical/20 w-full border-2 bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white md:w-auto md:min-w-[280px]">
                                <SelectValue placeholder={labels.selectPlaceholder} />
                            </SelectTrigger>
                            <SelectContent className="z-50 border-border bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
                                {patients.map((patient) => (
                                    <SelectItem
                                        key={patient.id}
                                        value={patient.id}
                                        className="cursor-pointer hover:bg-slate-light dark:text-white focus:dark:bg-slate-700"
                                    >
                                        <span className="mr-2 font-medium">{patient.name}</span>
                                        <span className="text-slate opacity-70 dark:text-slate-400">
                                            ({patient.id})
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="hidden flex-shrink-0 items-center gap-4 lg:flex">
                    <div className="flex flex-col items-end gap-1">
                        <p className="text-xs font-medium text-slate dark:text-slate-400">
                            {labels.ageLabel}
                        </p>
                        <p className="text-sm font-semibold text-navy dark:text-white">
                            {currentPatient.age} {labels.yearsSuffix}
                        </p>
                    </div>

                    <div className="h-10 w-px bg-border dark:bg-slate-700" />

                    <div className="flex flex-col items-end gap-1">
                        <p className="text-xs font-medium text-slate dark:text-slate-400">
                            {labels.conditionLabel}
                        </p>
                        <Badge className="bg-clinical/10 border-clinical/20 hover:bg-clinical/20 border text-clinical">
                            {currentPatient.condition}
                        </Badge>
                    </div>
                </div>
            </div>
        </header>
    );
}
