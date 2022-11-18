import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Button from "../../components/Button/Button";
import SubTitle from "../../components/SubTitle/SubTitle";
import CenterX from '../../components/Center/CenterX'
import { useNavigate } from "react-router-dom";

export default function FailPage(props) {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <SubTitle>Schade, {props.text}</SubTitle>
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
