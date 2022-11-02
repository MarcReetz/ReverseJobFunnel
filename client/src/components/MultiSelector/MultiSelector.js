import styles from "./MultiSelector.module.css";

export default function MultiSelector(props) {
  const items = props.entrys.map((element) => {
    return (
      <div
        className={styles.singleContainer}
        onClick={() => {props.onClick(element.text)}}
      >
        <div>
          <p className={styles.text}>{element.text}</p>
        </div>
        <div className={styles.circle}>
          {element.isChecked && <div className={styles.innerCircle} />}
        </div>
      </div>
    );
  });

  return <div className={styles.container}>{items}</div>;
}
