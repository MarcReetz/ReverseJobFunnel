import styles from './EmojiTextTableElement.module.css'

export default function EmojiTextTableElement ({emoji,children}) {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>{emoji}</p>
      <p className={styles.text}>{children}</p>
    </div>
  )
}