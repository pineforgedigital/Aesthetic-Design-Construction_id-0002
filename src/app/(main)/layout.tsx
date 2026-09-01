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


      <Navbar />
      <div className="flex-grow pt-[112px] md:pt-[128px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
