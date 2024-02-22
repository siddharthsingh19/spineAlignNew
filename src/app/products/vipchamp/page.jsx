import React from "react";
import Image from "next/image";
import Products from "@/components/products/ProductSection";
const page = () => {
  return (
    <div className="singleproductdiv">
      <div className="singleprodimage">
        <Image
          className="singleprodimageimg"
          src="https://www.vigenindia.com/uploaded_files/servimages/service_a9750dc.jpg"
          alt="topntop8500"
          layout="fill"
        />
      </div>
      <div className="proDesc">
        <h1>VIP CHAMP</h1>
        <br />
        <p>
          Hygiea is made by mixing 19 types of beneficial natural elements for
          the human body such as silver, germanium, clay, silica, algae etc,
          which emit a high amount of FIR. Hygiea provides FIR at 40°C
          temperature and theses FIR rays are 9.36 Micron in wavelength and the
          heat coming out from our body is also of the same wavelength.
          Therefore, when our body comes in contact with Hygiea FIR, our body
          absorbs it very easily and helps in heating the body from the inside.
          Hygiea helps to remove toxins, improve blood circulation, increase
          metabolism and immunity. VIP Champ has a total of 190 hexagon-shaped
          Super Hygiea, providing the benefits of FIR therapy to each part of
          the body at the same time. The FIR rays emanating from Super Hygiea
          penetrate deep into our body and first heat the inner parts of the
          body, and then heat the outer parts of the body. All of us are already
          familiar with the benefits and importance of FIR rays in our lives.
        </p>
        <br />
        <br />
        <h3>USER FRIENDLY REMOTE</h3>
        <p>
          VIP Champ remote is very easy to use & anyone can take therapy very
          easily from it. To ensure the temperature, a button has been installed
          like a regulator, which can be increased by rotating it straight and
          can reduce the temperature by rotating it in reverse. A special type
          of red LED is present on it, so it becomes convenient in setting the
          temperature even in the dark.
        </p>
      </div>
      <br />
      <br />
      <Products />
    </div>
  );
};

export default page;
