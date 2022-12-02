import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import SubTitle from "../../components/SubTitle/SubTitle";
import CenterX from '../../components/Center/CenterX'
import TextLeft from '../../components/TextLeft/TextLeft'
import { useNavigate } from "react-router-dom";

export default function FailPage(props) {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <TextLeft>Schade, {props.text}</TextLeft>
      <TextLeft>Kennst du noch jemanden der einen Softwareentwickler sucht? Dann schicke ihm doch einfach den Link der unten steht:</TextLeft>
      <TextLeft><a href="https://www.marc-reetz.de/">https://www.marc-reetz.de/</a></TextLeft>
      <TextLeft>oder</TextLeft>
      <TextLeft>schicke ihn den Link zu meiner Portfolio Seite:</TextLeft>
      <TextLeft><a href="https://www.marc-reetz.me/" target={'_blank'} rel="noreferrer" >https://www.marc-reetz.me/</a></TextLeft>
      <SubTitle>
        <strong>Aus Versehen falsch geklickt? </strong> <br /> Dann klicke
        einfach hier unten auf "Zurück"
      </SubTitle>
      <CenterX>
        <Button text={"Zurück"} onClick={() => {navigate(props.navigate)}}/>
      </CenterX>
    </ResponsiveContainer>
  );
}
