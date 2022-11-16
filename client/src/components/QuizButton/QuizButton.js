import styles from './QuizButton.module.css'

export default function QuizButton (props) {
  
  return (
    <button className={styles.button} onClick={props.onClick}>
      <div>
        <p className={styles.emoji}>{props.emoji}</p>
        <p className={styles.text}>{props.text}</p>
      </div>
    </button>
  )
}