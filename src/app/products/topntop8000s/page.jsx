import React from "react";
import Image from "next/image";
import Products from "@/components/products/ProductSection";
const page = () => {
  return (
    <div className="singleproductdiv">
      <div className="singleprodimage">
        <Image
          className="singleprodimageimg"
          src="https://www.vigenindia.com/uploaded_files/servimages/service_1a7e1b9.png"
          alt="topntop8000s"
          layout="fill"
        />
      </div>

      <h1>Top & Top 8000s</h1>
      <br />
      <br />
      <h3>UTILITY MAT</h3>
      <p>
        Top & Top 8000S is equipped with a special utility mat that contains 110
        hexagon shaped Hygiea which make it a complete heat and FIR therapy
        machine whether used part-wise or in combination with the main
        equipment.
      </p>
      <br />
      <br />
      <h3>REMOTE CONTROL</h3>
      <p>
        Top & Top 8000S has a multi-functional remote. It is user-friendly and
        can be used by the user of any age. By adopting automatic remote control
        the user can conveniently use the device just by pressing a button.
      </p>
      <br />
      <br />
      <h3>MIRACULOUS HYGIEA ROLLER</h3>
      <p>
        A new highly advanced technology of SMTS in Top & Top 8000S gives better
        effects on Bone Marrow which is responsible for the production of RBC,
        WBC, and platelets SMTS, as a result, healthy blood cells are produced
        and it increases calcium content in blood giving strength to bones.
      </p>
      <br />
      <br />
      <h3>SUPER MAGNETIC THERAPY SYSTEM</h3>
      <p>
        A high-end technological Magnet has been made by our R&D team and it is
        incorporated with Top & Top 8000S which gives the super magnetic
        therapy. It has strong magnetic power (about 60K Gauss power) and on
        coming in contact with the electric field it creates a strong magnetic
        field. Super magnet gives therapy to the spine and its faster healing
        effects go deep into our bone marrow correcting the formation of blood
        cells and healthy bones.
      </p>
      <br />
      <br />
      <h3>MOUNTED MASSAGE ROLLER </h3>
      <p>
        Top & Top 8000S utilizes a high-quality rubber based massage roller that
        holds 56 mounted acupressure points that gives massage and acupressure
        effects in an effective way. It touches our 365 acupressure point and as
        a result target tissues including muscles, tendons, ligament, skin,
        joints or other connective tissues are instigated and strengthen
        resistance to disease and promote wellness.
      </p>
      <br />
      <br />
      <Products />
    </div>
  );
};

export default page;
