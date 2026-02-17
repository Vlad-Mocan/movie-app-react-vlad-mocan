import SearchInput from "../SearchInput/SearchInput";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <a className={styles.logo} href="/">
        24frames
      </a>
      <nav>
        <ul className={styles.navGroup}>
          <li>
            <a className={styles.navLink} href="/">
              movies
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/lists">
              lists
            </a>
          </li>
        </ul>
      </nav>
      <SearchInput />
    </header>
  );
}
