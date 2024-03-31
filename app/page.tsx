import Link from "next/link";
import styles from "../styles/home.module.css";
import { API_URL } from "./constants";

async function getCategories() {
  return fetch(`${API_URL}/lists`).then((response) => response.json());
}

export default async function HomePage() {
  const categories = await getCategories();
  //console.log(categories);
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>
        The New York Times
        <br />
        Best Seller Explorer
      </h1>
      <section>
        <ul>
          {categories.results.map((category) => {
            return (
              <li key={category.list_name_encoded}>
                <Link href={`/list/${category.list_name_encoded}`}>
                  {category.display_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
