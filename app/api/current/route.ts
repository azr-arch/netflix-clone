// import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prismadb from "@/lib/prismadb";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user) {
            return NextResponse.redirect("/auth", { status: 401 });
        }
        const currentUser = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email || " ",
            },
            select: {
                email: true,
                name: true,
                image: true,
                id: true,
            },
        });
        if (!currentUser) {
            return NextResponse.redirect("/auth", { status: 404 });
        }
        return NextResponse.json(currentUser, { status: 200 });
    } catch (error) {
        console.log("[CURRENT]", error);
        return new NextResponse("Bad request");
    }
}
