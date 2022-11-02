import styles from "./EmojiText.module.css"

export default function EmojiText (props) {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>{props.emoji}</p>
      <p>{props.text}</p>
    </div>
  )
}