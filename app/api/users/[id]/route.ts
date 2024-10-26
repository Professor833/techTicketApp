import prisma from "@/prisma/db";
import { userSchema } from "@/validationSchemas/users";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import options from "../../auth/[...nextauth]/options";

interface Props {
    params: {
        id: string;
    }
}

export async function PATCH(request: NextRequest, { params }: Props) {

    const body = await request.json();

    const session = await getServerSession(options)
    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    if (session.user.role !== 'ADMIN') {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    const validation = userSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    if (!user) {
        return NextResponse.json("User not found", { status: 404 });
    }

    if (body?.password && body.password.length > 0) {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        body.password = hashedPassword;
    } else {
        delete body.password;
    }

    if (user.username !== body.username) {
        const existingUser = await prisma.user.findUnique({
            where: {
                username: body.username
            }
        });

        if (existingUser) {
            return NextResponse.json("Username already exists", { status: 400 });
        }
    }

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            ...body
        }
    });

    return NextResponse.json({ message: "User updated" });

}