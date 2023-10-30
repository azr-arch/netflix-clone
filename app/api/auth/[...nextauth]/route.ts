import prismadb from "@/lib/prismadb";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials: { email: string; password: string }) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and Password is required");
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error("Account doesnt exists");
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Incorrect password");
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/auth",
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await prismadb.user.findUnique({
                    where: {
                        email: session.user?.email || " ",
                    },
                });
                // @ts-ignore
                session.user.sub = sessionUser?.id?.toString();

                return session;
            } catch (error: any) {
                throw new Error(error.message);
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
