"use client";
import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path === "/" ? styles.nav__on : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={path === "/about" ? styles.nav__on : ""}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
