'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const password = formData.get('password')
  const authPass = process.env.AUTH_PASS

  if (!authPass) {
    return { error: 'Server authentication is not configured properly.' }
  }

  if (password === authPass) {
    // Set cookie with 1 hour expiration (3600 seconds)
    const cookieStore = await cookies()
    cookieStore.set('site-access', 'granted', {
      maxAge: 3600,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    })

    redirect('/')
  } else {
    return { error: 'Incorrect password.' }
  }
}
