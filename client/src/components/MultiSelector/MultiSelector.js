import styles from "./MultiSelector.module.css";

export default function MultiSelector(props) {
  const items = props.entrys.forEach((element) => {
    return (
      <div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <div className={styles.circle}>
            <div className={styles.inner}/>
          </div>
        </div>
      </div>
    );
  });

  return <div className={styles.container}>
    {items}
  </div>;
}
