import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthorized");
        }

        const count = await prismadb.movie.count();
        const randomMovieIndex = Math.floor(Math.random() * count);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomMovieIndex,
        });

        return NextResponse.json({ randomMovie: randomMovies[0] }, { status: 200 });
    } catch (error) {
        console.log("[RANDOM_MOVIE]", error);
        return new NextResponse("Internal Server Error");
    }
}
