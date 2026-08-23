'use client'

import { useActionState, useState } from 'react'
import { loginAction } from './actions'
import { KeyRound, Lock, Loader2, ArrowRight } from 'lucide-react'

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
          <KeyRound className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" />
        </div>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="block w-full pl-10 pr-3 py-3 border border-gray-700 bg-gray-800/50 rounded-xl leading-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-gray-800 transition-all sm:text-sm backdrop-blur-sm"
          placeholder="Enter Access Password"
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-400 flex items-start gap-2">
          <div className="mt-0.5">⚠️</div>
          <div>{error}</div>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {isPending ? (
            <Loader2 className="h-5 w-5 text-indigo-300 animate-spin" aria-hidden="true" />
          ) : (
            <Lock className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" aria-hidden="true" />
          )}
        </span>
        {isPending ? 'Verifying...' : 'Access Site'}
        <span className="absolute right-0 inset-y-0 flex items-center pr-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transform duration-200">
            <ArrowRight className="h-4 w-4 text-indigo-200" />
        </span>
      </button>
    </form>
  )
}
