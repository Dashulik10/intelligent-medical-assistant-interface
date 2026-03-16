import { Patient } from "@/types";

export const mockPatients: Patient[] = [
    {
        id: "P001",
        name: "John Smith",
        age: 45,
        gender: "male",
        condition: "Hypertension",
        lastVisit: "2023-10-15",
        status: "active",
    },
    {
        id: "P002",
        name: "Sarah Johnson",
        age: 62,
        gender: "female",
        condition: "Diabetes Type 2",
        lastVisit: "2023-11-02",
        status: "critical",
    },
    {
        id: "P003",
        name: "Michael Chen",
        age: 38,
        gender: "male",
        condition: "Asthma",
        lastVisit: "2023-12-10",
        status: "discharged",
    },
];
