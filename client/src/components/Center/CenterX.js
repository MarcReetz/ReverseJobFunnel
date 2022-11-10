import styles from "./CenterX.module.css";

export default function centerX({ children }) {
  return <div className={styles.center}>{children}</div>;
}
