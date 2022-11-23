import Input from "../../components/Input/Input";
import EmojiText from "../../components/EmojiText/EmojiText";
import styles from "./SubmitPage.module.css";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import Selector from "../../components/Selector/Selector";
import React, { useState } from 'react';
import Title from "../../components/Title/Title"
import SubTitle from "../../components/SubTitle/SubTitle"
import { useSelector } from "react-redux";
import { selectBenefitsSlice } from "../benefitsPage/benefitsSlice";


export default function SubmitPage() {
  const benefitsSlice = useSelector(selectBenefitsSlice)

  const baseUrl = "http://localhost:3000/"

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

  const onSubmit = () => {

    const response = fetch(baseUrl + "api/signup", {
      method: "Post",
      body: JSON.stringify({ ...benefitsSlice
      }),
    });

    response.then( response => {
      if(response.status === 200){
        console.log("Got a Response")
      }
    })
  }

  return (
    <ResponsiveContainer>
      <div className={styles.inputContainer}>
        <SubTitle>Fast geschafft 🎉 Letzter Schritt! </SubTitle>
        <Title>Cool! Ich möchte dich und dein Team sehr gerne kennenlernen.</Title>
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
        <Button text={"Absenden 📬"} onClick={onSubmit}/>
        
        <SubTitle><strong>So geht's jetzt weiter:</strong> <br/> Ich melde mich bei dir zeitnah, um ein 5 minutiges telefongespräch mit dir zu führen. <br/> Wenn wir gut zueinander passen, können wir von da aus weiter schauen.</SubTitle>
        </div>
    </ResponsiveContainer>
  );
}
