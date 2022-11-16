import styles from './SpacerX.module.css'

export default function SpacerX (props) {

  var height = "32px"

  // eslint-disable-next-line default-case
  switch(props.size) {
    case "xs":
      height = "8px"
      break;
    case "s": 
      height = "16px"
      break;
    case "m":
      height = "32px"
      break;
    case "l":
      height = "64px"
      break;
  }

  return (
    <div className={styles.spacer} style={{height:height}}>

    </div>
  )
}