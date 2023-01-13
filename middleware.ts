import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const {pathname} = request.nextUrl
    const refreshToken = request.cookies.get('refreshToken')?.value

  if (pathname.startsWith('/auth/login') && !refreshToken) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/auth/register') && !refreshToken) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/dashboard') && refreshToken) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/auth/login', '/auth/register', '/dashboard'],
  }