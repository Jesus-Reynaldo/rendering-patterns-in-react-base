import Tab from "./Tab";
import Tabs from "./Tabs";
export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Giraffe">
        🦒
      </Tab>
      <Tab label="Dolphin">
        🐬
      </Tab>
      <Tab label="Lizard">
        🦎
      </Tab>
    </Tabs>
  );
};
