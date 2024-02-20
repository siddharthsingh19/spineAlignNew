import React from "react";
import Image from "next/image";
import Products from "@/components/products/ProductSection";
const page = () => {
  return (
    <div className="singleproductdiv">
      <div className="singleprodimage">
        <Image
          className=""
          src="https://www.vigenindia.com/uploaded_files/servimages/service_01f7e76.jpg"
          alt="topntop8500"
          width={700}
          height={500}
        />
      </div>

      <h1>Top & Top 8500</h1>
      <br />
      <br />
      <h3>NECK MASSAGER</h3>
      <p>
        NECK MASSAGE Therapy (patented) is the most unique incorporation in our
        therapy bed which can’t be found in any other company product as Vigen
        holds the Patent Rights to this. This innovation has been developed by
        the Scientists of R&D department in KOREA. It works very effectively and
        efficiently to minimize Stress and Fatigue & maximizes the blood flow to
        our Brain and improves its control over other body parts. It improves
        the functioning of the Cervical Vertebrae and the Nervous System to
        ensure the coordination of all Major systems and metabolic activity of
        the body. No other Therapy Beds have Patents, Vigen proudly holds the
        Patent.
      </p>
      <br />
      <br />
      <h3>MIRACULOUS HYGIEA ROLLER</h3>
      <p>
        Hygiea roller therapy improves the blood circulation and nerves so that
        all the organs of the body function efficiently resulting in a healthy
        mind and body.
      </p>
      <br />
      <br />
      <h3>SMTS</h3>
      <p>
        The super magnet shifts from north pole to south pole 50 to 60 times in
        a minute and generates a super magnetic field that instigates the
        hemoglobin (Fe/iron in the blood cell), thus purifying blood and the
        vibrations promote blood circulation.
      </p>
      <br />
      <br />
      <h3>MOUNTED MASSAGE ROLLER</h3>
      <p>
        Top & Top 8500S utilizes a high-quality rubber based massage roller that
        has 56 mounted acupressure points, it massages and gives acupressure
        therapy effectively. It presses 365 acupressure points on the body and
        as a result target tissues including muscles, tendons, ligament, skin,
        joints or other connective tissues instigating and strengthening
        resistance to disease and promoting wellness.
      </p>
      <br />
      <br />
      <h3>TEN BALL PROJECTOR </h3>
      <p>
        It can be used after connecting to the main Bed or can be used to
        directly heal the body part or the desired organ while lying over it. It
        can also be used separately also without lying on the therapy bed.
      </p>
      <br />
      <br />
      <Products />
    </div>
  );
};

export default page;
