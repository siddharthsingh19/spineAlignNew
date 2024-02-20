import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <h1 className={styles.aboutHeading}>About Us</h1>
      <p className={styles.aboutPara}>
        Offered products range consists of Automatic Thermal Massager Top & Top
        8500, Top & Top 8000S, Top & Top 9500, SMTS Mat, Vigen Champ Mat,
        Hue-Grathing Multi Mat, Smart Laser, Laser Meister, Coa Beam and much
        more. This array is precisely manufactured using the best quality base
        material and modern technology under the guidance of skilled experts in
        compliance with the set quality standards.
        <br />
        <br />
        We are able to provide a best range of health products in the market due
        to the dedicated efforts of our experienced and qualified professionals.
        They work efficiently and fully by employing modern machines to
        manufacture the approved health equipment to the industry. With the help
        of their proper coordination, we are able to meet the various needs of
        our customers in the most satisfying way. After evaluating skill by our
        human resources, all our employees are selected.
      </p>
      <h1 className={styles.aboutHeading}>Why Us</h1>
      <p className={styles.aboutPara}>
        We are an unique name in the industry to provide a special range of
        products to our reputed customers.
        <ul className={styles.ul}>
          <li className={styles.li}>Ethical business policies</li>
          <li className={styles.li}>Skilled professionals</li>
          <li className={styles.li}>Timely delivery</li>
          <li className={styles.li}>Easy payment modes</li>
          <li className={styles.li}>Transparent dealings</li>
          <li className={styles.li}>Client-centric approach</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
