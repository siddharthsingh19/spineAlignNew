import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Buttons/Button";
import oldplaying from "/public/oldplaying.png";
import ProductSection from "@/components/products/ProductSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Empowering your journey to wellness.
            </h1>
            <p className={styles.desc}>
              Join us on your path to a healthier, happier you. Start exploring
              our collection today and experience the transformative power of
              therapy equipment.
            </p>
            <Link href="/products" className={styles.viewButton}>
              Explore
            </Link>
          </div>
          <div className={styles.item}>
            <Image src={oldplaying} className={styles.img} alt="image" />
          </div>
        </div>
      </section>
      <ProductSection />
    </>
  );
}
