import Link from "next/link";
import styles from "../../../styles/book-list.module.css";
import { API_URL } from "../../constants";

interface IParams {
  params: { id: string };
}

async function getBookList(id) {
  return fetch(`${API_URL}/list?name=${id}`).then((response) =>
    response.json()
  );
}

export async function generateMetadata({ params: { id } }) {
  const booklist = await getBookList(id);
  return {
    title: booklist.results.list_name,
  };
}

export default async function BookList({ params: { id } }: IParams) {
  const booklist = await getBookList(id);
  console.log(booklist.results.books);
  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{booklist.results.list_name}</h2>
      <ul>
        {booklist.results.books.map((book) => {
          return (
            <li key={book.primary_isbn10}>
              <img
                src={book.book_image}
                alt={`${book.title} by ${book.author}`}
              />
              <div>
                <p>{book.title}</p>
                <span>{book.author}</span>
              </div>
              <Link href={book.amazon_product_url} target="_blank">
                Buy
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
