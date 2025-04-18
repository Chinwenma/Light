import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
    </div>
  )
}
