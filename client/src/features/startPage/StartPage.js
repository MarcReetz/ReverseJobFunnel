import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer"
import SubTitle from "../../components/SubTitle/SubTitle"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import CenterX from "../../components/Center/CenterX"

export default function StartPage () {

  return (
    <ResponsiveContainer>
      <SubTitle>
        Einen neuen Mitarbeiter in nur 2 Minuten -<br/>
        ohne Headhunter ✨
      </SubTitle>
      <Title>
        Moin ich bin<br/>
        <strong>Marc Reetz</strong><br/>
        und ich könnte ihr Team verstärken als <br/>
        <strong>Software Developer</strong>
      </Title>
      <SubTitle>
        Beginn: ab sofort möglich <br/>
        Ort: Bremen und Umgebung / <br/>
        remote weltweit
      </SubTitle>
      <CenterX>
        <Button text={"Finde mehr über mich heraus 🎉"}/>
      </CenterX>
      <SubTitle>
        <strong>Ein Marc für ihr Team</strong>
      </SubTitle>
    </ResponsiveContainer>
  )
} 