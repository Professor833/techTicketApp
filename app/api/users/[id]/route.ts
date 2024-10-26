import prisma from "@/prisma/db";
import { userSchema } from "@/validationSchemas/users";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: string;
    }
}

export async function PATCH(request: NextRequest, { params }: Props) {
    const body = await request.json();
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