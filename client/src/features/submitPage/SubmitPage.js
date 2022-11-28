import Input from "../../components/Input/Input";
import EmojiText from "../../components/EmojiText/EmojiText";
import styles from "./SubmitPage.module.css";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import Selector from "../../components/Selector/Selector";
import React, { useEffect, useState } from 'react';
import Title from "../../components/Title/Title"
import SubTitle from "../../components/SubTitle/SubTitle"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBenefitsSlice } from "../benefitsPage/benefitsSlice";
import { setIsValidEmail,setIsValidName,setIsValidPhone,selectIsValidEmail,selectIsValidName,selectIsValidPhone,setName,selectName, selectSubmitSlice,setEmail,selectEmail, selectPhone,setPhone, selectDataProtection, switchDataProtection } from "./submitPageSlice";


export default function SubmitPage() {
  const benefitsSlice = useSelector(selectBenefitsSlice)
  const submitPageSlice = useSelector(selectSubmitSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const baseUrl = "http://localhost:3000/"

  const [isErrorName,setIsErrorName] = useState(false)
  const [isErrorEmail,setIsErrorEmail] = useState(false)
  const [isErrorPhone,setIsErrorPhone] = useState(false)

  const [isInactive,setIsInactive] = useState(true)

  const isDataProtection = useSelector(selectDataProtection)
  const isValidEmail = useSelector(selectIsValidEmail)
  const isValidPhone = useSelector(selectIsValidPhone)
  const isValidName = useSelector(selectIsValidName)

  console.log(isValidName)

  const checkValid = () => {
    if(isValidName && isValidEmail && isValidPhone && isDataProtection){
      console.log("wtf")
      setIsInactive(false)
      return
    }
    setIsInactive(true)
  }

  useEffect(checkValid)

  const onChangeName = (event) => {
    dispatch(setName(event.target.value))
    if(event.target.value.length > 0){
      dispatch(setIsValidName(true))
      setIsErrorName(false)
    }else{
      setIsErrorName(true)
      dispatch(setIsValidName(false))
    }
  }

  const onChangeEmail = (event) => {
    dispatch(setEmail(event.target.value))

    if(event.target.value && (/^\S+@\S+\.\S+$/).test(event.target.value)){
      dispatch(setIsValidEmail(true))
      setIsErrorEmail(false)
    }else {
     setIsErrorEmail(true)
     dispatch(setIsValidEmail(false))
    }
  }

  const onChangePhone = (event) => {
    dispatch(setPhone(event.target.value))

    if(event.target.value && (/^(\+)?([ 0-9]){6,16}$/).test(event.target.value)){
      dispatch(setIsValidPhone(true))
      setIsErrorPhone(false)
    }else {
     setIsErrorPhone(true)
     dispatch(setIsValidPhone(false))
    }
  }

  const onClickPrivacy = () => {
    dispatch(switchDataProtection())
  }

  const onSubmit = () => {

    const response = fetch(baseUrl + "api/signup", {
      method: "Post",
      body: JSON.stringify({ ...benefitsSlice , ...submitPageSlice
      }),
    });

    response.then( response => {
      if(response.status === 201){
        navigate('/sucess')
      }
    })
  }

  return (
    <ResponsiveContainer>
      <div className={styles.inputContainer}>
        <SubTitle>Fast geschafft 🎉 letzter Schritt! </SubTitle>
        <Title>Cool! Ich möchte dich und dein Team sehr gerne kennenlernen.</Title>
        <EmojiText emoji={"👋"} text={"Dein Name"} />
        <Input placeholder={"max mustermann"} name={"name"} value={useSelector(selectName)} onChange={onChangeName} isValid={useSelector(selectIsValidName)} isError={isErrorName}/>
        <EmojiText
          emoji={"✉️"}
          text={"Deine E-Mail Adresse"}
          htmlFor={"email"}
        />
        <Input placeholder={"example@test.de"} name={"email"} value={useSelector(selectEmail)} onChange={onChangeEmail} isValid={useSelector(selectIsValidEmail)} isError={isErrorEmail}/>
        <EmojiText
          emoji={"📞"}
          text={"Deine Telefonnummer"}
          htmlFor={"phoneNumber"}
        />
        <Input placeholder={"01234 56789"} name={"phoneNumber"} value={useSelector(selectPhone)} onChange={onChangePhone} isValid={useSelector(selectIsValidPhone)} isError={isErrorPhone} />
      </div>
      <div className={styles.container}>
        <Selector
          emoji={"🖋️"}
          text={"Datenschutzerklärung gelesen und akzeptiert."}
          isChecked={useSelector(selectDataProtection)}
          onClick={onClickPrivacy}
        />
        <Button text={"Absenden 📬"} onClick={onSubmit} isInactive={isInactive}/>
        
        <SubTitle><strong>So geht's jetzt weiter:</strong> <br/> Ich melde mich zeitnah bei dir, um ein 5-minütiges Telefongespräch mit dir zu führen. <br/> Wenn wir gut zueinanderpassen, können wir von da aus weiterschauen.</SubTitle>
        </div>
    </ResponsiveContainer>
  );
}
