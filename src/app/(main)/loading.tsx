import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-[70vh] bg-primary-base flex flex-col items-center justify-center px-6">
      <div className="w-20 h-20 mb-8 relative">
        <div className="absolute inset-0 rounded-full border-4 border-highlight/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-highlight border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-highlight">
          <Loader2 className="w-8 h-8 animate-pulse" />
        </div>
      </div>
      <h2 className="font-outfit text-2xl font-semibold text-primary-contrast animate-pulse">
        Laying the foundation...
      </h2>
    </main>
  );
}
