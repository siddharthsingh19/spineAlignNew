"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import { LangButton, LogoutButton } from "../Buttons/Button";
import { FaCaretDown } from "react-icons/fa6";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [hamLink, sethamLink] = useState(false);
  return (
    <div className="nav-container">
      <div className={styles.container_wrapper}>
        <Link href="/" className={styles.logo}>
          SpineAlign
        </Link>
        <div className={hamLink ? "links hlinks" : "links"}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {/* <LangButton /> */}
        </div>
        <div className={styles.ham} onClick={() => sethamLink(!hamLink)}>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
