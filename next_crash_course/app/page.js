import styles from "./page.module.css";
import Header from "@/components/header";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <p>This is next js</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <Header />
    </main>
  );
}
