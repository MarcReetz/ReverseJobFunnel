import styles from './EmojiTextTable.module.css'

export default function EmojiTextTable({children}){
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}