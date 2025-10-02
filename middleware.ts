import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "./lib/prisma";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const isAnyUser = (await prisma.user.count()) > 0;

  if (
    session &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isAnyUser && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  if (isAnyUser && request.nextUrl.pathname === "/register") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    session &&
    request.nextUrl.pathname === "/dashboard" &&
    session.user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!session && request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/register", "/login", "/dashboard"],
};
