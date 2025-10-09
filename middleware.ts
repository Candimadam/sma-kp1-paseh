import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import db from "./lib/db";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const isAnyUser = (await db.user.count()) > 0;

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
    request.nextUrl.pathname.startsWith("/dashboard") &&
    session.user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/((?!api|trpc|_next/static|_next/image).*)"], // hanya middleware di-ran pada route frontend
};
