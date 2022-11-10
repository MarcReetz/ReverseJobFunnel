import EmojiTextTable from "./EmojiTextTable";
import EmojiTextTableElement from "./EmojiTextTableElement";

export default {
  name: "EmojiTextTable",
  component: EmojiTextTable,
};

const Template = (args) => (
  <EmojiTextTable {...args}>
    <EmojiTextTableElement emoji={"💻"}>
      Ihr habt Frei hardware wahl nice!
    </EmojiTextTableElement>
    <EmojiTextTableElement emoji={"💰"}>
      Ihr habt ein kopetitives gehalt sehr gut!
    </EmojiTextTableElement>
  </EmojiTextTable>
);

export const First = Template.bind();

First.args = {};
