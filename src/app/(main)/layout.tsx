import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Decorative Background Leaves */}
      <div className="fixed -left-20 md:-left-32 top-[20%] z-0 opacity-20 md:opacity-40 mix-blend-multiply pointer-events-none w-48 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={400} height={400} className="object-contain -rotate-12" priority />
      </div>
      <div className="fixed -right-24 md:-right-32 bottom-[10%] z-0 opacity-15 md:opacity-30 mix-blend-multiply pointer-events-none w-64 md:w-auto">
        <Image src="/leaf.jpg" alt="" width={500} height={500} className="object-contain rotate-180" priority />
      </div>

      <Navbar />
      <div className="flex-grow pt-[112px] md:pt-[128px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
