import styles from './Input.module.css'

export default function Input (props) {

  const redBorder = props.isError ? styles.redBorder : ''
  const greenBorder = props.isValid ? styles.greenBorder : ''
  const classes = styles.input + ' ' + greenBorder + ' ' + redBorder

  return(
    <input className={classes} placeholder={props.placeholder} name={props.name}/>
  )
}