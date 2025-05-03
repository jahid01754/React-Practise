import CopyRight from "./CopyRight";
import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";

export default function UITree() {
  return (
    <>
      <div>
        <FancyText title text={"Get Inspired App"} />
        <InspirationGenerator>
          <CopyRight year={2004} />
        </InspirationGenerator>
      </div>
    </>
  );
}
