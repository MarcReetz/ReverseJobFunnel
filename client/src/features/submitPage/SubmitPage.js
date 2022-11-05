import Input from "../../components/Input/Input";
import EmojiText from "../../components/EmojiText/EmojiText";
import styles from "./SubmitPage.module.css";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import Selector from "../../components/Selector/Selector";

export default function SubmitPage() {
  return (
    <ResponsiveContainer>
      <div className={styles.inputContainer}>
        <EmojiText emoji={"👋"} text={"Dein Name"} />
        <Input placeholder={"max mustermann"} name={"name"} />
        <EmojiText
          emoji={"✉️"}
          text={"Deine E-Mail Adresse"}
          htmlFor={"email"}
        />
        <Input placeholder={"example@test.de"} name={"email"} />
        <EmojiText
          emoji={"📞"}
          text={"Deine Telefonnummer"}
          htmlFor={"phoneNumber"}
        />
        <Input placeholder={"01234 56789"} name={"phoneNumber"} />
      </div>
      <div className={styles.container}>
        <Selector
          emoji={"🖋️"}
          text={"Datenschutzerklärung gelesen und Akzeptiert"}
        />
        <Button text={"Absenden 📬"} />
      </div>
    </ResponsiveContainer>
  );
}
