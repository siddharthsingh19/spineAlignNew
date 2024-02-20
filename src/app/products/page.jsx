import React from "react";
import styles from "./page.module.css";
import ProductSection from "@/components/products/ProductSection";

const Products = () => {
  return (
    <div className={styles.proDiv}>
      <ProductSection />
    </div>
  );
};

export default Products;
