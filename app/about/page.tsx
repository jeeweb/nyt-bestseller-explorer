import styles from "../../styles/about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <>
      <h2 className={styles.pageTitle}>About Us</h2>
      <p className={styles.aboutSection}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </>
  );
}
