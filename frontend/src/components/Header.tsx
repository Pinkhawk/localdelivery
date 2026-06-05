import Link from "next/link";
import styles from "@/styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            LocalDelivery
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/login">Login</Link>
            <Link href="/cart">Cart (0)</Link>
          </div>
        </div>
      </div>
    </header>
  );
}