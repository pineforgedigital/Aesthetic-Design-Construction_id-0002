import { LoginForm } from './LoginForm'
import Image from 'next/image'

export const metadata = {
  title: 'Under Construction | Aesthetic Design Construction',
  description: 'Our website is currently under construction.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-primary-base flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Leaves */}
      <div className="absolute -left-20 md:-left-32 top-[10%] z-0 opacity-20 md:opacity-40 mix-blend-multiply pointer-events-none w-48 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={400} height={400} className="object-contain -rotate-12" priority />
      </div>
      <div className="absolute -right-24 md:-right-32 bottom-[5%] z-0 opacity-15 md:opacity-30 mix-blend-multiply pointer-events-none w-64 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain rotate-180" priority />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-black/5 mb-8">
          <Image 
            src="/logo.jpg" 
            alt="Aesthetic Design & Construction" 
            width={120} 
            height={120} 
            className="object-contain h-24 w-24 rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-fine-detail mb-3 tracking-tight font-outfit">
            Under Construction
          </h1>
          <p className="text-primary-contrast/80 text-sm leading-relaxed max-w-[280px] mx-auto">
            We're building something extraordinary. If you have an access code, please enter it below.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full bg-white/80 backdrop-blur-xl border border-primary-contrast/10 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="mt-12 text-secondary-accent text-xs text-center font-medium">
          &copy; {new Date().getFullYear()} Aesthetic Design Construction. All rights reserved.
        </div>
      </div>
    </div>
  )
}
