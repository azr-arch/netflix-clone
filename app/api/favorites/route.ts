import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthenticated");
        }
        const user = await prismadb.user.findUnique({
            where: {
                //@ts-ignore
                email: session.user.email,
            },
        });

        const favourites = await prisma?.movie.findMany({
            where: {
                id: {
                    in: user?.favouriteIds,
                },
            },
        });

        return NextResponse.json(favourites, { status: 200 });
    } catch (error) {
        console.log("[FAVORITES_GET]", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
