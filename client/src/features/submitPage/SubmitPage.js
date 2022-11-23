import Input from "../../components/Input/Input";
import EmojiText from "../../components/EmojiText/EmojiText";
import styles from "./SubmitPage.module.css";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import Selector from "../../components/Selector/Selector";
import React, { useState } from 'react';
import Title from "../../components/Title/Title"
import SubTitle from "../../components/SubTitle/SubTitle"
import { useDispatch, useSelector } from "react-redux";
import { selectBenefitsSlice } from "../benefitsPage/benefitsSlice";
import { setName,selectName, selectSubmitSlice,setEmail,selectEmail, selectPhone,setPhone, selectDataProtection, switchtDataProtection } from "./submitPageSlice";


export default function SubmitPage() {
  const benefitsSlice = useSelector(selectBenefitsSlice)
  const submitPageSlice = useSelector(selectSubmitSlice)
  const dispatch = useDispatch()

  const baseUrl = "http://localhost:3000/"

  const [isValidName,setIsValidName] = useState(false)
  const [isErrorName,setIsErrorName] = useState(false)

  const [isValidEmail,setIsValidEmail] = useState(false)
  const [isErrorEmail,setIsErrorEmail] = useState(false)

  const [isValidPhone,setIsValidPhone] = useState(false)
  const [isErrorPhone,setIsErrorPhone] = useState(false)

  const onChangeName = (event) => {
    dispatch(setName(event.target.value))
    if(event.target.value.length > 0){
      setIsValidName(true)
      setIsErrorName(false)
    }else{
      setIsErrorName(true)
    }
  }

  const onChangeEmail = (event) => {
    dispatch(setEmail(event.target.value))

    if(event.target.value && (/^\S+@\S+\.\S+$/).test(event.target.value)){
      setIsValidEmail(true)
      setIsErrorEmail(false)
    }else {
      setIsErrorEmail(true)
    }
  }

  const onChangePhone = (event) => {
    dispatch(setPhone(event.target.value))

    if(event.target.value && (/^(\+)?([ 0-9]){6,16}$/).test(event.target.value)){
      setIsValidPhone(true)
      setIsErrorPhone(false)
    }else {
      setIsErrorPhone(true)
    }
  }

  const onClickPrivacy = () => {
    dispatch(switchtDataProtection())
  }

  const onSubmit = () => {

    const response = fetch(baseUrl + "api/signup", {
      method: "Post",
      body: JSON.stringify({ ...benefitsSlice , ...submitPageSlice
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
        <Input placeholder={"max mustermann"} name={"name"} value={useSelector(selectName)} onChange={onChangeName} isValid={isValidName} isError={isErrorName}/>
        <EmojiText
          emoji={"✉️"}
          text={"Deine E-Mail Adresse"}
          htmlFor={"email"}
        />
        <Input placeholder={"example@test.de"} name={"email"} value={useSelector(selectEmail)} onChange={onChangeEmail} isValid={isValidEmail} isError={isErrorEmail}/>
        <EmojiText
          emoji={"📞"}
          text={"Deine Telefonnummer"}
          htmlFor={"phoneNumber"}
        />
        <Input placeholder={"01234 56789"} name={"phoneNumber"} value={useSelector(selectPhone)} onChange={onChangePhone} isValid={isValidPhone} isError={isErrorPhone} />
      </div>
      <div className={styles.container}>
        <Selector
          emoji={"🖋️"}
          text={"Datenschutzerklärung gelesen und Akzeptiert"}
          isChecked={useSelector(selectDataProtection)}
          onClick={onClickPrivacy}
        />
        <Button text={"Absenden 📬"} onClick={onSubmit}/>
        
        <SubTitle><strong>So geht's jetzt weiter:</strong> <br/> Ich melde mich bei dir zeitnah, um ein 5 minutiges telefongespräch mit dir zu führen. <br/> Wenn wir gut zueinander passen, können wir von da aus weiter schauen.</SubTitle>
        </div>
    </ResponsiveContainer>
  );
}
