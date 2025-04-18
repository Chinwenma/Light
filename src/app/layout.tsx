import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import clsx from "clsx";
// import { tailwindme } from "module";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
// clsxis supossed to be in the opening body tag