import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prismadb from "@/lib/prismadb";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthorized");
        }

        const movies = await prismadb.movie.findMany();

        return NextResponse.json(movies, { status: 200 });
    } catch (error) {
        console.log("[MOVIES]", error);
        return new NextResponse("Internal Server Error");
    }
}
