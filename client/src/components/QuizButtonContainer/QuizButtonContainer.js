import styles from './QuizButtonContainer.module.css'

export default function QuizButtonContainer ({children}) {
  return (<div className={styles.container}>{children}</div>)
}