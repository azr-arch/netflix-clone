import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";

import { ErrorInfo } from "react";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest, { params }: { params: { movieId: string } }) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthenticated");
        }

        const { movieId } = params;

        const existingMovie = await prismadb.movie.findUnique({ where: { id: movieId } });
        if (!existingMovie) return new NextResponse("Invalid id");

        const updatedUser = await prismadb.user.update({
            where: {
                //@ts-ignore
                email: session?.user?.email,
            },
            data: {
                favouriteIds: {
                    push: movieId,
                },
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.log("[FAVOURITE_POST]", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { movieId: string } }) {
    try {
        const session = await getServerSession();
        if (!session?.user) {
            return new NextResponse("Unauthenticated");
        }

        const { movieId } = params;
        //@ts-ignore
        const user = await prismadb.user.findUnique({ where: { email: session.user.email } });
        const updatedFavouriteIds = user?.favouriteIds.filter((id) => id !== movieId);

        const updatedUser = await prismadb.user.update({
            //@ts-ignore
            where: { email: session.user.email },
            data: {
                favouriteIds: {
                    set: updatedFavouriteIds,
                },
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.log("[FAVOURITE_DEL]", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
