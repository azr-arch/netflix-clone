// import { NextRequest, NextResponse } from "next/server";

// import prismadb from "./prismadb";
// import { getSession } from "next-auth/react";
// import { NextApiRequest } from "next";
// import { getToken } from "next-auth/jwt";
// import { getServerSession } from "next-auth";

// const serverAuth = async (req: NextRequest) => {
//     const session = await getServerSession();
//     // console.log("session: ", session);

//     // if (!session?.email) {
//     //     return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth`);
//     // }

//     // const currentUser = await prismadb.user.findUnique({
//     //     where: {
//     //         email: session.email,
//     //     },
//     // });

//     // if (!currentUser) {
//     //     return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth`);
//     // }

//     return NextResponse.json({ error: "teting" }, { status: 201 });
// };

// export default serverAuth;
