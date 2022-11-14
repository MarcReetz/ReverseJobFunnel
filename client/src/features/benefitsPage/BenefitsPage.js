import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import EmojiTextTable from '../../components/EmojiTextTable/EmojiTextTable'
import Selector from '../../components/Selector/Selector'

export default function BenefitsPage() {
  return (
    <ResponsiveContainer>
      <EmojiTextTable>
        <Selector text={'Freie Hardware Wahl (oder Mac os)'}/>
        <Selector text={'Hello'}/>
        <Selector emoji={'💪'} text={'Job fitness Angebote'}/>
        <Selector text={'Job fitness Angebote'}/>
        <Selector text={'Job fitness Angebote'}/>
        <Selector text={'Job fitness Angebote'}/>
      </EmojiTextTable>
    </ResponsiveContainer>
  )
}