import styles from './TextLeft.module.css'

export default function TextLeft ({children}) {
  return (<p className={styles.text}>
  {children}
  </p>)
}