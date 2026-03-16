"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SSOButtons } from "./SSOButtons";
import { LoginPayload } from "@/types/auth";
import { useTranslation } from "@/context/LanguageContext";

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const { t } = useTranslation();
    const { login } = t.authConfig;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData: LoginPayload = {
            email: email,
            password: password,
            rememberMe: rememberMe,
        };
        console.log("Отправляем на бэк:", formData);
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="login-email" className="text-navy">
                    {login.emailLabel}
                </Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
                    <Input
                        id="login-email"
                        type="email"
                        placeholder={login.emailPlaceholder}
                        className="bg-slate-lighter focus-visible:ring-clinical/20 border-border pl-10 focus-visible:border-clinical"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="login-password" className="text-navy">
                    {login.passwordLabel}
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
                    <Input
                        id="login-password"
                        type="password"
                        placeholder={login.passwordPlaceholder}
                        className="bg-slate-lighter focus-visible:ring-clinical/20 border-border pl-10 focus-visible:border-clinical"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate">
                    <input
                        type="checkbox"
                        className="rounded border-border text-navy focus:ring-clinical"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    {login.rememberMe}
                </label>
                <a href="#" className="text-sm text-clinical hover:underline">
                    {login.forgotPassword}
                </a>
            </div>

            <Button type="submit" className="hover:bg-navy/90 w-full bg-navy text-white">
                {login.submitButton}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <SSOButtons />
        </form>
    );
}
