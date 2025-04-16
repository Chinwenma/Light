
 import ArrowIcon  from "@/assets/arrow-right.svg";
 import  Cog  from "@/assets/cog.png";
 import cylinder from "@/assets/cylinder.png"
 import noodleImage from '@/assets/noodle.png'
 import Image from "next/image";

 export const Hero = () => {
   return(
<section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
  <div className="container px-4 sm:px-6 max-w-screen-xl mx-auto">
    <div className="md:flex items-center">
      {/* Left Content */}
      <div className="w-full md:w-[478px]">
        <div className="tag mb-4">version 2.0 is here</div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl tracking-tight font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Pathway to productivity
        </h1>

        <p className="text-base sm:text-lg md:text-xl tracking-tight mt-6 text-[#010D3E]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsum sit velit, quam deleniti cumque suscipit vitae. Ad deleniti ducimus, fugiat, minus nisi vero repellendus laboriosam quod ipsum, magnam nesciunt!
        </p>

        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <Image
          src={Cog}
          alt="hero png"
          className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
        />
        <Image
          src={cylinder}
          alt="cylinder"
          width={220}
          height={220}
          className="hidden md:block -top-8 -left-32 md:absolute"
        />
        <Image
          src={noodleImage}
          alt="noodle"
          width={220}
          className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
        />
      </div>
    </div>
  </div>
</section>
)
 };



































// import ArrowIcon  from "@/assets/arrow-right.svg";
// import  Cog  from "@/assets/cog.png";
// import cylinder from "@/assets/cylinder.png"
// import noodleImage from '@/assets/noodle.png'
// import Image from "next/image";

// export const Hero = () => {
//   return(
// <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
// <div className="container">
//   <div className="md:flex items-center">
//   <div className="w-[478px]">
//     <div className="tag">
//       version 2.0 is here
//     </div>
//     <div className="px-4 sm:px-6 max-w-screen-xl mx-auto">
//   <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
//     Pathway to productivity
//   </h1>
//   <p className="text-base sm:text-lg md:text-xl tracking-tight mt-6 text-[#010D3E]">
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsum sit velit, quam deleniti cumque suscipit vitae. Ad deleniti ducimus, fugiat, minus nisi vero repellendus laboriosam quod ipsum, magnam nesciunt!
//   </p>
// </div>

//     <div className=" flex gap-1 items-center mt-[30px]">
//       <button className="btn btn-primary">Get for free</button>
//       <button className="btn btn-text gap-1"><span>Learn More</span>
//       <ArrowIcon className="h-5 w-5"/></button>

//     </div>
//   </div>
//   <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//     <Image src={Cog} alt="hero png" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
//     <Image src={cylinder} alt="cylinder" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute "/>
//     <Image src={noodleImage} alt="noodle" width={220} className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
//   </div>
//   </div>
// </div>
// </section> 
// )
// };
