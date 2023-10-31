import type { Metadata } from "next";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Netflix Clone",
    description: "Created with NextJs",
};
const interFont = Inter({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body className={interFont.className}>{children}</body>
            </SessionProvider>
        </html>
    );
}
