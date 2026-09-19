import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { getSiteSettingsQuery } from "@/sanity/queries";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(getSiteSettingsQuery);

  return (
    <>
      <Navbar settings={settings} />
      <div className="flex-grow pt-[112px] md:pt-[128px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
