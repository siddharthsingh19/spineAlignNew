import React from "react";
import Product from "./Product";
import prods from "@/utils/products.js";

const Products = () => {
  return (
    <section className="productSection">
      <div className="productlist">
        <h1 className="productheadingtop">Products</h1>
        <div className="productsWrapper">
          {prods.productCatalogue.map((product) => (
            <Product
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              openlink={product.openlink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
