"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterPayload } from "@/types/auth";
import { useTranslation } from "@/context/LanguageContext";

export function SignupForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { t } = useTranslation();
    const { signup } = t.authConfig;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const registrationData: RegisterPayload = {
            fullName: name,
            email: email,
            password: password,
        };
        console.log("Регистрация нового врача:", registrationData);
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-navy">
                    {signup.nameLabel}
                </Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
                    <Input
                        id="signup-name"
                        type="text"
                        placeholder={signup.namePlaceholder}
                        className="bg-slate-lighter focus-visible:ring-clinical/20 border-border pl-10 focus-visible:border-clinical"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-navy">
                    {signup.emailLabel}
                </Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
                    <Input
                        id="signup-email"
                        type="email"
                        placeholder={signup.emailPlaceholder}
                        className="bg-slate-lighter focus-visible:ring-clinical/20 border-border pl-10 focus-visible:border-clinical"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-navy">
                    {signup.passwordLabel}
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
                    <Input
                        id="signup-password"
                        type="password"
                        placeholder={signup.passwordPlaceholder}
                        className="bg-slate-lighter focus-visible:ring-clinical/20 border-border pl-10 focus-visible:border-clinical"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>

            <Button type="submit" className="hover:bg-navy/90 w-full bg-navy text-white">
                {signup.submitButton}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="mt-4 px-4 text-center text-xs leading-normal text-slate">
                {signup.termsText}
            </p>
        </form>
    );
}
