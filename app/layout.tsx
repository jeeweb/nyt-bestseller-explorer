import Footer from "../components/footer";
import Header from "../components/header";
import { Metadata } from "next";
import "../styles/global.css";
import "../styles/common.css";

export const metadata: Metadata = {
  title: {
    default: "NYT Best Seller Explorer",
    template: "%s | NYT Best Seller Explorer",
  },
  description:
    "The New York Times Best Sellers are up-to-date and authoritative lists of the most popular books in the United States, based on sales in the past week, including fiction, non-fiction, paperbacks, children’s books, audiobooks, graphic books and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
