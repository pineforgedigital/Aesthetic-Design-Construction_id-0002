import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  // If we're on the login page, bypass auth check to prevent infinite redirect loop
  if (url.pathname === '/login') {
    return NextResponse.next()
  }

  // Get credentials from environment variables
  const authPass = process.env.AUTH_PASS

  // If no password is set in the environment, bypass auth entirely
  if (!authPass) {
    return NextResponse.next()
  }

  // Check for our secure cookie
  const accessCookie = req.cookies.get('site-access')
  
  if (accessCookie?.value === 'granted') {
    return NextResponse.next()
  }

  // If auth fails or is not provided, redirect to the new Under Construction login page
  const loginUrl = new URL('/login', req.url)
  return NextResponse.redirect(loginUrl)
}

// See "Matching Paths" below to learn more
export const config = {
  // Apply middleware to all routes except API, _next/static, _next/image, favicon.ico, and studio routes.
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|studio).*)',
}
