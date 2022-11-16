import styles from './QuizButton.module.css'

export default function QuizButton (props) {
  
  return (
    <button className={styles.button}>
      <p>{props.text}</p>
    </button>
  )
}