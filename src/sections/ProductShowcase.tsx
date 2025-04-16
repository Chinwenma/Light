import Image from "next/image";
import productImage from "@/assets/product-image.png"

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[3D2DCFF] py-24">
      <div className="container">
        <div className="flex justify-center">
        <div className="tag">boost productivity</div></div>
        <h2 className="text-center text-3xl font-bold tracking-tight">Lorem ipsum, dolor sit amet consectetur elit. ?</h2>
        <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit inventore, tempore eligendi dolorum tempora et consequatur itaque eius .</p>
        <Image src={productImage} alt="img" />
      </div>
    </section>
  )
};
