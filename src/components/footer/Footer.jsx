import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/fb.png"
          width={30}
          height={30}
          alt="spinealign facebook account"
        />
        <Image
          src="/insta.png"
          width={30}
          height={30}
          alt="spinealign instagram account"
        />
        <Link href="https://wa.me/8577047227">
          <Image
            src="/whatsapp.svg"
            width={30}
            height={30}
            alt="spinealign instagram account"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
