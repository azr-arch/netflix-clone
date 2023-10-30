import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, password } = await req.json();
        console.log(name, email, password);
        const userExists = await prismadb.user.findUnique({
            where: {
                email,
            },
        });

        if (userExists) {
            return NextResponse.json({ error: "Email is already in use" }, { status: 403 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                hashedPassword,
                name,
                image: "",
                emailVerified: new Date(),
            },
        });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log("[REGISTER]", error);
        return new NextResponse("Bad request", { status: 500 });
    }
}
