import type { Metadata } from "next";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
    title: "Netflix Clone",
    description: "Created with NextJs",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body>{children}</body>
            </SessionProvider>
        </html>
    );
}
