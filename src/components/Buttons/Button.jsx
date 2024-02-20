"use client";
import styles from "@/components/Buttons/buttons.module.css";
import React from "react";

const handleLang = () => {};

export default function LogoutButton() {
  return (
    <button
      className={styles.logout}
      onClick={() => console.log("first click")}
    >
      Log out
    </button>
  );
}

const LangButton = () => {
  return (
    <button className="viewButton" onClick={handleLang}>
      Hindi
    </button>
  );
};

export { LogoutButton, LangButton };
