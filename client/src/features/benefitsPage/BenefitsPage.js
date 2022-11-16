import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable";
import Selector from "../../components/Selector/Selector";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Button from "../../components/Button/Button";
import CenterX from '../../components/Center/CenterX';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectFitness,selectHoliday,switchFitness,switchHoliday} from "./benefitsSlice";
import SpacerX from "../../components/Spacer/SpacerX";

export default function BenefitsPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ResponsiveContainer>
      <Title>Welche Benefits kann man bei euch erwarten? </Title>
      <SubTitle>Wähle alle Punkte aus die zutreffen.</SubTitle>
      <EmojiTextTable>
        <Selector text={"Freie Hardware Wahl (oder Mac os)"}/>
        <Selector text={"Hello"} />
        <Selector emoji={"💪"} text={"Job fitness Angebote"} isChecked={useSelector(selectFitness)} onClick={() => dispatch(switchFitness())}/>
        <Selector emoji={"🏝️"} text={"26+ Tage Urlaub im Jahr"} isChecked={useSelector(selectHoliday)} onClick={() => dispatch(switchHoliday())}/>
        <Selector text={"Job fitness Angebote"} />
        <Selector text={"Job fitness Angebote"} />
      </EmojiTextTable>
      <SpacerX size={"l"}/>
      <CenterX>
        <Button text={"Zum Letzten Schritt 🏁"} onClick={() => navigate('/submit')}/>
      </CenterX>
    </ResponsiveContainer>
  );
}
