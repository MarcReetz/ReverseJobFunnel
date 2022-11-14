import styles from "./Button.module.css"

export default function Button (props) {

  const isInactive = props.isInactive ? styles.inactive : ' ' ;
  const classes = styles.button + ' ' +  isInactive

  return (
    <button className={classes} onClick={props.onClick}>
    <p>{props.text}</p>
    </button>
  )
}