import { Brain, HeartPulse, Shield, Stethoscope, Zap } from "lucide-react";
import { AboutItem, BadgeItem, FeatureItem, NavItem } from "@/types/auth";
import { Activity } from "react";

export const siteConfig = {
    name: "Intelligent medical assistant",
    mainText: "AI-Powered Diagnostic Assistant for Physicians",
    description:
        "Digitize paper records, unlock predictive insights, " +
        "and generate beautiful patient summaries instantly. " +
        "Designed by AI, built for Doctors.",
    badges: [
        {
            text: "Powered by Advanced AI",
            icon: Zap,
            iconColor: "text-mint",
            bgColor: "bg-mint/10",
            borderColor: "border-mint/20",
        },
    ] as BadgeItem[],
    features: [
        {
            title: "RAG Technology",
            description: "Context-aware AI responses based on your medical documents",
            icon: Brain,
            colorClass: "text-clinical bg-clinical/10",
        },
        {
            title: "HIPAA Compliant",
            description: "Enterprise-grade security for patient data protection",
            icon: Shield,
            colorClass: "text-mint bg-mint/10",
        },
    ] as FeatureItem[],
    navItems: [
        {
            label: "Features",
            href: "/features",
        },
        {
            label: "Security",
            href: "/security",
        },
        {
            label: "About",
            href: "/about",
        },
    ] as NavItem[],
    about: {
        title: "About Medical assistant",
        icon: HeartPulse,
        iconColor: "text-mint",
        sections: [
            {
                title: "Our Mission",
                description:
                    "We believe that artificial intelligence shouldn't replace doctors, but empower them. Our mission is to reduce administrative burden and provide accurate data so you can focus on what matters most: patient care.",
            },
            {
                title: "The Clinical Approach",
                description:
                    "Built in collaboration with leading physicians, our system understands the realities of your work. We organize data the way a doctor thinks, highlighting critical anomalies while keeping the full patient context accessible.",
            },
        ] as AboutItem[],
    },
    featuresPage: {
        title: "Our Features",
        subtitle:
            "Discover how Intelligent medical assistan empowers healthcare professionals with cutting-edge tools.",
        items: [
            {
                icon: Brain,
                title: "AI Diagnostic Assistant",
                description:
                    "Advanced machine learning algorithms to assist in early detection and diagnosis of complex conditions.",
            },
            {
                icon: Stethoscope,
                title: "Patient Journey Mapping",
                description:
                    "Track and analyze patient history with automated chronological summaries and predictive insights.",
            },
            {
                icon: Zap,
                title: "Real-time Processing",
                description:
                    "Get instant lab result interpretations and EHR data synchronization without any delay.",
            },
            {
                icon: Activity,
                title: "Smart Vitals Monitoring",
                description:
                    "Continuous monitoring alerts prioritizing patients who need immediate clinical attention.",
            },
        ],
    },
    securityPage: {
        title: "Enterprise-Grade Security",
        subtitle:
            "Your patients' data is our highest priority. We employ state-of-the-art security measures to ensure full compliance and data protection.",
        items: [
            {
                title: "End-to-End Encryption",
                desc: "All data is encrypted at rest and in transit using AES-256 and TLS 1.3 protocols.",
            },
            {
                title: "HIPAA & GDPR Compliant",
                desc: "Our infrastructure and processes meet the strictest global healthcare data regulations.",
            },
            {
                title: "Secure Infrastructure",
                desc: "Hosted on isolated, dedicated medical-grade cloud servers with daily redundant backups.",
            },
        ],
    },
};
