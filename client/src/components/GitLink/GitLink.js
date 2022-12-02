import styles from "./GitLink.module.css";

export default function GitLink() {
  return (
    <a className={styles.link}href={"https://github.com/MarcReetz/ReverseJobFunnel"} target={"_blank"} rel={"noreferrer"}>
      <div className={styles.container}>
        <img src={"GitHub-Mark-64px.png"} alt={"Githublink"} />
        <p>Finde den Code zu <br/> dieser Seite auf <strong>GitHub</strong></p>
      </div>
    </a>
  );
}
