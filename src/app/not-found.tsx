import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-primary-contrast">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury Architecture"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-contrast/90 via-primary-contrast/60 to-primary-contrast"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="font-outfit text-8xl md:text-[150px] font-bold text-white mb-4 tracking-tighter leading-none opacity-90">
          404
        </h1>
        <div className="h-[1px] w-24 bg-highlight mb-8 opacity-70"></div>
        <h2 className="font-outfit text-3xl md:text-5xl font-light text-white mb-6 tracking-wide">
          Page Not Found
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
          The page you are looking for does not exist. It might have been moved or renamed.
        </p>
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border border-white/20 rounded-full text-white hover:text-primary-contrast transition-colors duration-500"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
          <span className="relative z-10 font-medium tracking-widest uppercase text-sm">Return Home</span>
        </Link>
      </div>
    </main>
  );
}
