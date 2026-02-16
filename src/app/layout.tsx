import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MedMind AI | For Doctors",
    description: "Advanced AI Assistant for Healthcare Professionals",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased bg-slate-50">
        {children}
        </body>
        </html>
    );
}