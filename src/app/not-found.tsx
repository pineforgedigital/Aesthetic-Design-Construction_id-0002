import Link from "next/link";
import { Hammer } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-primary-base flex items-center justify-center px-6 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-accent via-transparent to-transparent"></div>
      
      <div className="text-center relative z-10 max-w-2xl mx-auto">
        <div className="w-24 h-24 mx-auto bg-highlight/10 text-highlight rounded-full flex items-center justify-center mb-8 animate-bounce shadow-xl shadow-highlight/20">
          <Hammer size={48} />
        </div>
        <h1 className="font-outfit text-5xl md:text-7xl font-bold text-primary-contrast mb-6 drop-shadow-md">
          404
        </h1>
        <h2 className="font-outfit text-2xl md:text-3xl font-semibold text-primary-contrast mb-4">
          Page Under Construction
        </h2>
        <p className="text-tertiary-accent text-lg mb-10">
          It looks like we haven&apos;t laid the foundation for this page yet. The blueprint you&apos;re looking for might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex px-10 py-4 bg-highlight text-white hover:bg-[#A34F3A] transition-all rounded-full font-bold text-lg items-center shadow-lg shadow-highlight/20"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
