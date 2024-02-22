import React from "react";
import Image from "next/image";
import Products from "@/components/products/ProductSection";
const page = () => {
  return (
    <div className="singleproductdiv">
      <div className="singleprodimage">
        <Image
          className="singleprodimageimg "
          src="https://www.vigenindia.com/uploaded_files/servimages/service_c183249.png"
          alt="topntop8500"
          width={350}
          height={350}
        />
      </div>
      <div className="proDesc">
        <h1>10 BALL PROJECTOR</h1>
      </div>
      <br />
      <br />
      <Products />
    </div>
  );
};

export default page;
