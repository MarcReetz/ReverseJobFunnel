import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable";
import Selector from "../../components/Selector/Selector";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Button from "../../components/Button/Button";
import CenterX from "../../components/Center/CenterX";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFitness,
  selectHoliday,
  selectLearning,
  selectRemoteWorking,
  switchFitness,
  switchHoliday,
  switchLearning,
  switchRemoteworking,
  switchTime,
  selectTime,
  selectHardware,
  switchHardware,
} from "./benefitsSlice";
import SpacerX from "../../components/Spacer/SpacerX";

export default function BenefitsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ResponsiveContainer>
      <Title>Welche Benefits kann man bei euch erwarten? </Title>
      <SubTitle>Wähle alle Punkte aus die zutreffen.</SubTitle>
      <EmojiTextTable>
        <Selector
          emoji={"💻"}
          text={"Freie Hardware Wahl (oder Mac os)"}
          isChecked={useSelector(selectHardware)}
          onClick={() => dispatch(switchHardware())}
        />
        <Selector
          emoji={"⏱️"}
          text={"Modernes Arbeitszeit Modell"}
          isChecked={useSelector(selectTime)}
          onClick={() => dispatch(switchTime())}
        />
        <Selector
          emoji={"💪"}
          text={"Job fitness Angebote"}
          isChecked={useSelector(selectFitness)}
          onClick={() => dispatch(switchFitness())}
        />
        <Selector
          emoji={"🏝️"}
          text={"26+ Tage Urlaub im Jahr"}
          isChecked={useSelector(selectHoliday)}
          onClick={() => dispatch(switchHoliday())}
        />
        <Selector
          emoji={"📚 "}
          text={"Zeit und Budget für Weiterbildung"}
          isChecked={useSelector(selectLearning)}
          onClick={() => dispatch(switchLearning())}
        />
        <Selector
          emoji={"🏠"}
          text={"Home office Möglichkeiten"}
          isChecked={useSelector(selectRemoteWorking)}
          onClick={() => dispatch(switchRemoteworking())}
        />
      </EmojiTextTable>
      <SpacerX size={"l"} />
      <CenterX>
        <Button
          text={"Zum Letzten Schritt 🏁"}
          onClick={() => navigate("/submit")}
        />
      </CenterX>
    </ResponsiveContainer>
  );
}
