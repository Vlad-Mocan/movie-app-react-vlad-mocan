import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.list}>
        <li>
          <a className={styles.link}>about</a>
        </li>
        <li>
          <a className={styles.link}>contact</a>
        </li>
      </ul>
      <p className={styles.appNameParagraph}>24FRAMES</p>
    </footer>
  );
}
