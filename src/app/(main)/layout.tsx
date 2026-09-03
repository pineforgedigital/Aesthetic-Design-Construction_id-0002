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
      {/* Decorative Background Leaves (Removed for clean editorial aesthetic) */}

      <Navbar />
      <div className="flex-grow pt-[112px] md:pt-[128px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
