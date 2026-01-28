"use client";
import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <h1>Portfolio Lorenzo L&apos;Hostis</h1>
            <nav className={`${styles.nav}`}>
                <Link className={`${styles.link}`} href="/">Home</Link>
                <Link className={`${styles.link}`} href="Contact">Contact</Link>
            </nav>
        </header>
    )
}