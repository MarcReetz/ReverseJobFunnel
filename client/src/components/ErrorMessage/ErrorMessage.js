import styles from "./ErrorMessage.module.css"
import Button from "./../Button/Button"
import CenterX from "./../Center/CenterX"

export default function ErrorMessage (props) {
  if(!props.isVisible){
    return
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <CenterX>
          <Button onClick={props.onClick} text={props.buttonText}/>
        </CenterX>
      </div>
    </div>
  )
}