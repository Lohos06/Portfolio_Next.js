import Link from "next/link";
import styles from "./404Error.module.css";
 
export default function NotFound() {
  return (
    <main className={`min-w-screen min-h-screen flex flex-col items-center justify-center`}>
      <h1 className={`${styles.Error}`}>404 Not Found</h1>
      <p>Page non existante ou introuvable</p>
      <Link href="index"></Link>
    </main>
  );
}