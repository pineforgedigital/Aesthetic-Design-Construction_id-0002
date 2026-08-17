import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Read basic auth credentials from the request headers
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  // Get credentials from environment variables
  const authUser = process.env.AUTH_USER
  const authPass = process.env.AUTH_PASS

  // If no credentials are set in the environment, bypass auth entirely
  if (!authUser || !authPass) {
    return NextResponse.next()
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === authUser && pwd === authPass) {
      return NextResponse.next()
    }
  }

  // If auth fails or is not provided, trigger the basic auth prompt
  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// See "Matching Paths" below to learn more
export const config = {
  // Apply middleware to all routes except API, _next/static, _next/image, favicon.ico, and studio routes.
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|studio).*)',
}
