import styles from "./SubTitle.module.css"

export default function SubTitle ({ children }) {
  return <h3 className={styles.subTitle}>{children}</h3>
}