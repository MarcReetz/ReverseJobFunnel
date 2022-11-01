import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="/impressum.html">Impressum</a>
        <span className={styles.point}>·</span>
        <a href="/privacy">Datenschutz</a>
      </div>
    </footer>
  )
}