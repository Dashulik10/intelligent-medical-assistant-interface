import { Header } from "@/components/layout/Header";
import { TextSection } from "@/components/auth/TextSection";
import { AuthCard } from "@/components/auth/AuthCard";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950">
            <Header />

            <main className="container mx-auto px-8 py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <TextSection />
                    <div className="flex justify-center lg:justify-end">
                        <AuthCard />
                    </div>
                </div>
            </main>
        </div>
    );
}
