import Link from "next/link";
import styles from "../styles/home.module.css";
import { API_URL } from "./constants";

async function getCategories() {
  return fetch(`${API_URL}/lists`).then((response) => response.json());
}

export default async function HomePage() {
  const categories = await getCategories();
  // console.log(categories);
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>
        <span>The New York Times</span>
        <span>Best Seller Explorer</span>
      </h1>
      <section className={styles.homeSection}>
        <div className={styles.scrollWrap}>
          <ul className={styles.categoryList}>
            {categories.results.map((category) => {
              return (
                <li
                  key={category.list_name_encoded}
                  className={styles.categoryItem}
                >
                  <Link href={`/list/${category.list_name_encoded}`}>
                    <span>{category.display_name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
