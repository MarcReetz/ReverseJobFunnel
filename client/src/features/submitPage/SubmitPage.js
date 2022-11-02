import Input from "../../components/Input/Input";
import styles from "./SubmitPage.module.css"

export default function SubmitPage() {
  return (
    <div>
      <div className={styles.inputContainer}>
        <Input placeholder={"Dein name"}/>
        <Input placeholder={"Deine E-Mail Adresse"}/>
        <Input placeholder={"Deine Telefonnummer"}/>  
      </div>
    </div>
  );
}
