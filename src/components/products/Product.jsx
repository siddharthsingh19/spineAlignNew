import React from "react";
import Image from "next/image";
import topntop8500 from "/public/topntop8500.jpg";
import { LangButton } from "../Buttons/Button";
import ViewButton from "./ViewButton";
const Product = ({ img, title, price, openlink }) => {
  return (
    <div className="productbox">
      <Image src={img} alt={title} width={280} height={280} />
      <h3>{title}</h3>
      <p>{price}</p>
      <ViewButton openlink={openlink} />
    </div>
  );
};

export default Product;
