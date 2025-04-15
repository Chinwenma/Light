import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center justify-center">
          <p>Get Starded for free</p>
          <p className="text-white/60">streamline your work flow</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center justify-center">
              <Link href='#' >About</Link>
              <Link href='#'>Feature</Link>
              <Link href='#'>Customers</Link>
              <Link href='#'>Pricing</Link>
              <Link href='#'>Contact</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Request a demo</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
