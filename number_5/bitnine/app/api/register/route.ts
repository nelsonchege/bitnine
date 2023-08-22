import bcrypt from "bcrypt";
import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(requsest: Request) {
  const body = await requsest.json();
  const { username, password } = body;

  try {
    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        username,
        hashedpassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new Response("could not register user", { status: 500 });
  }
}
