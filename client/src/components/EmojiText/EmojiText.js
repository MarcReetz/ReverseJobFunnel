import styles from "./EmojiText.module.css"

export default function EmojiText (props) {

  if(props.htmlFor){
    return (
      <div className={styles.container}>
      <p className={styles.emoji}>{props.emoji}</p>
      <label htmlFor={props.htmlFor}>{props.text}</label>
    </div>
    )
  }

  return (
    <div className={styles.container}>
      <p className={styles.emoji}>{props.emoji}</p>
      <p>{props.text}</p>
    </div>
  )
}