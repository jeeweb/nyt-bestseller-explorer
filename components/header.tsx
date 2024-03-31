import Navigation from "./navigation";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
