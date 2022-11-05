import styles from './Input.module.css'

export default function Input (props) {

  const redBorder = props.isError ? styles.redBorder : ''
  const greenBorder = props.isValid ? styles.greenBorder : ''
  const classes = styles.input + ' ' + greenBorder + ' ' + redBorder

  const propertys = {
    className:classes,
    placeholder: props.placeholder,
    name:props.name,
  }

  if(props.value){
    propertys.value = props.value
  }

  if(props.onChange){
    propertys.onChange = props.onChange
  }

  return(
    <input {...propertys}/>
  )
}