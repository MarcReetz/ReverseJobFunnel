import Input from "../../components/Input/Input";
import EmojiText from "../../components/EmojiText/EmojiText";
import styles from "./SubmitPage.module.css";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import Selector from "../../components/Selector/Selector";
import React, { useState } from 'react';

export default function SubmitPage() {

  const [name,setName] = useState("")
  const [isValidName,setIsValidName] = useState(false)
  const [isErrorName,setIsErrorName] = useState(false)

  const [email,setEmail] = useState("")
  const [isValidEmail,setIsValidEmail] = useState(false)
  const [isErrorEmail,setIsErrorEmail] = useState(false)

  const [phone,setPhone] = useState("")
  const [isValidPhone,setIsValidPhone] = useState(false)
  const [isErrorPhone,setIsErrorPhone] = useState(false)

  const [privacy,setPrivacy] = useState(false)

  const onChangeName = (event) => {
    setName(event.target.value)
    if(event.target.value.length > 0){
      setIsValidName(true)
      setIsErrorName(false)
    }else{
      setIsErrorName(true)
    }
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)

    if(event.target.value && (/^\S+@\S+\.\S+$/).test(event.target.value)){
      setIsValidEmail(true)
      setIsErrorEmail(false)
    }else {
      setIsErrorEmail(true)
    }
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value)

    if(event.target.value && (/^(\+)?([ 0-9]){6,16}$/).test(event.target.value)){
      setIsValidPhone(true)
      setIsErrorPhone(false)
    }else {
      setIsErrorPhone(true)
    }
  }

  const onClickPrivacy = () => {
    setPrivacy(!privacy)
  }

  return (
    <ResponsiveContainer>
      <div className={styles.inputContainer}>
        <EmojiText emoji={"👋"} text={"Dein Name"} />
        <Input placeholder={"max mustermann"} name={"name"} value={name} onChange={onChangeName} isValid={isValidName} isError={isErrorName}/>
        <EmojiText
          emoji={"✉️"}
          text={"Deine E-Mail Adresse"}
          htmlFor={"email"}
        />
        <Input placeholder={"example@test.de"} name={"email"} value={email} onChange={onChangeEmail} isValid={isValidEmail} isError={isErrorEmail}/>
        <EmojiText
          emoji={"📞"}
          text={"Deine Telefonnummer"}
          htmlFor={"phoneNumber"}
        />
        <Input placeholder={"01234 56789"} name={"phoneNumber"} value={phone} onChange={onChangePhone} isValid={isValidPhone} isError={isErrorPhone} />
      </div>
      <div className={styles.container}>
        <Selector
          emoji={"🖋️"}
          text={"Datenschutzerklärung gelesen und Akzeptiert"}
          isChecked={privacy}
          onClick={onClickPrivacy}
        />
        <Button text={"Absenden 📬"} />
      </div>
    </ResponsiveContainer>
  );
}
