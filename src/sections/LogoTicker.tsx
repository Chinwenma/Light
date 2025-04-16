import Image from "next/image";
import acmeLogo from '@/assets/logo-acme.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png'
import apexLogo from '@/assets/logo-apex.png'
import pulseLogo from '@/assets/logo-pulse.png'
import quantumLogo from '@/assets/logo-quantum.png'
export const LogoTicker = () => {
  return(
   <div className="py-8 bg-white md:py-12">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex gap-14 flex-none">
        <Image src={acmeLogo} alt="logo" className="logo-ticker-image"/>
        <Image src={pulseLogo} alt="logo" className="logo-ticker-image"/>
        <Image src={apexLogo} alt="logo" className="logo-ticker-image"/>
        <Image src={celestialLogo} alt="logo" className="logo-ticker-image"/>
        <Image src={echoLogo} alt="logo" className="logo-ticker-image"/>
        <Image src={quantumLogo} alt="logo" className="logo-ticker-image"/>
        </div>
      </div>
    </div>
   </div>
  )
};
