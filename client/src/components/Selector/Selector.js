import styles from "./Selector.module.css"

export default function Selector (props) {

  return (
    <button className={styles.selector} onClick={props.onClick}>
      <div className={styles.container}>
        <div className={styles.emoji}>
          <p>{props.emoji}</p>
        </div>
        <div className={styles.text}>
          <p>Hello</p>
        </div>
        <div className={styles.circle}>
        {props.isChecked && (<div className={styles.innerCircle}/>)}
        </div>
      </div>
    </button>
  )
}