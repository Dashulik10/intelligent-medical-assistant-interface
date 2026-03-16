"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { useTranslation } from "@/context/LanguageContext";

export function AuthCard() {
    const { t } = useTranslation();
    const { tabs, name, description } = t.authConfig;

    return (
        <Card className="w-full max-w-md border-border/50 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
            <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl text-navy dark:text-white">{name}</CardTitle>
                <CardDescription className="text-slate dark:text-slate-400">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="mb-6 grid w-full grid-cols-2 dark:bg-slate-800">
                        <TabsTrigger
                            value="login"
                            className="dark:text-slate-400 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white"
                        >
                            {tabs.login}
                        </TabsTrigger>
                        <TabsTrigger
                            value="signup"
                            className="dark:text-slate-400 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white"
                        >
                            {tabs.signup}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>

                    <TabsContent value="signup">
                        <SignupForm />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
