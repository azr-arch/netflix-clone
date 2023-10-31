import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { movieId: string } }) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthenticated");
        }

        const { movieId } = params;

        if (!movieId) {
            return new NextResponse("Invalid Id");
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            },
        });

        if (!movie) {
            return new NextResponse("Invalid Id");
        }

        return NextResponse.json(movie, { status: 200 });
    } catch (error) {
        console.log("[MOVIE_GET]", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
