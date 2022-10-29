import styles from "./Button.module.css"

export default function Button (props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
    <p>{props.text}</p>
    </button>
  )
}