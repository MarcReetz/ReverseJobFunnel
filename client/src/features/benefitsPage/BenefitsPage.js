import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable";
import Selector from "../../components/Selector/Selector";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Button from "../../components/Button/Button";
import CenterX from '../../components/Center/CenterX'

export default function BenefitsPage() {
  return (
    <ResponsiveContainer>
      <Title>Welche Benefits kann man bei euch erwarten? </Title>
      <SubTitle>Wähle alle Punkte aus die zutreffen.</SubTitle>
      <EmojiTextTable>
        <Selector text={"Freie Hardware Wahl (oder Mac os)"} />
        <Selector text={"Hello"} />
        <Selector emoji={"💪"} text={"Job fitness Angebote"} />
        <Selector emoji={"🏝️"} text={"26+ Tage Urlaub im Jahr"} />
        <Selector text={"Job fitness Angebote"} />
        <Selector text={"Job fitness Angebote"} />
      </EmojiTextTable>
      <CenterX>
        <Button text={"Zum Letzten Schritt 🏁"} />
      </CenterX>
    </ResponsiveContainer>
  );
}
