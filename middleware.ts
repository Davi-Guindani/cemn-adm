import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const loggedIn: boolean = false;

export function middleware(request: NextRequest) {
  if (loggedIn) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/protected_route/:path*"],
};
