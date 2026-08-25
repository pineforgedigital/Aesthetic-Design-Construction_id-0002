'use client'

import { useActionState, useState } from 'react'
import { loginAction } from './actions'
import { KeyRound, Lock, Loader2, ArrowRight, User } from 'lucide-react'

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setError(null)
    try {
      const result = await loginAction(formData)
      if (result?.error) {
        setError(result.error)
      }
    } catch (err) {
      setError('An unexpected error occurred.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-5 w-full max-w-sm">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className="h-5 w-5 text-secondary-accent group-focus-within:text-highlight transition-colors" />
        </div>
        <input
          type="text"
          name="username"
          id="username"
          required
          className="block w-full pl-10 pr-3 py-3 border border-tertiary-accent/30 bg-white rounded-xl leading-5 text-primary-contrast placeholder-secondary-accent focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all sm:text-sm shadow-sm"
          placeholder="Username"
        />
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <KeyRound className="h-5 w-5 text-secondary-accent group-focus-within:text-highlight transition-colors" />
        </div>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="block w-full pl-10 pr-3 py-3 border border-tertiary-accent/30 bg-white rounded-xl leading-5 text-primary-contrast placeholder-secondary-accent focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all sm:text-sm shadow-sm"
          placeholder="Password"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600 flex items-start gap-2">
          <div className="mt-0.5">⚠️</div>
          <div>{error}</div>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-highlight hover:bg-highlight/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {isPending ? (
            <Loader2 className="h-5 w-5 text-white/70 animate-spin" aria-hidden="true" />
          ) : (
            <Lock className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" aria-hidden="true" />
          )}
        </span>
        {isPending ? 'Verifying...' : 'Access Site'}
        <span className="absolute right-0 inset-y-0 flex items-center pr-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transform duration-200">
            <ArrowRight className="h-4 w-4 text-white" />
        </span>
      </button>
    </form>
  )
}
