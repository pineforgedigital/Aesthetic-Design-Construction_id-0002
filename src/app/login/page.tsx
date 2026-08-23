import { LoginForm } from './LoginForm'
import { Hammer } from 'lucide-react'

export const metadata = {
  title: 'Under Construction | Aesthetic Design Construction',
  description: 'Our website is currently under construction.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Logo / Icon */}
        <div className="w-20 h-20 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mb-8 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl" />
          <Hammer className="w-10 h-10 text-indigo-400 relative z-10" />
        </div>

        {/* Text Content */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Under Construction
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
            We're building something extraordinary. If you have an access code, please enter it below.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-600 text-xs text-center">
          &copy; {new Date().getFullYear()} Aesthetic Design Construction. All rights reserved.
        </div>
      </div>
    </div>
  )
}
