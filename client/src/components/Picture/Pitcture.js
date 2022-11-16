import styles from "./Picture.module.css"

export default function Picture (props) {
  return (
    <div className={styles.container}>
      <img src={props.src} alt={props.alt} className={styles.picture}/>
    </div>
  )
}