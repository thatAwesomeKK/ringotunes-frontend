import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchRingRandom } from "./lib/apiCalls/rings";
import { ringtoneBody } from "./lib/typings/typings";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ring: ringtoneBody = await fetchRingRandom();

  const session = request.cookies.get("refreshToken")?.value;
  console.log("pathname " + pathname);

  const isLoggedIn = !!session;

  if (pathname === "/" && ring) {
    console.log("middleware: redirecting to ring");
    return NextResponse.rewrite(new URL(`/${ring._id}`, request.url));
  }
  if (pathname === "/signin" && isLoggedIn) {
    console.log("middleware: redirecting to /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  //   if (pathname.startsWith("/profile") && !isLoggedIn) {
  //     console.log("middleware: redirecting to /auth/login");
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/signin"],
};
