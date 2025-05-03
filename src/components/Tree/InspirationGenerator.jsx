import FancyText from "./FancyText";
// import Quotes from "./Quotes";
import Color from "./Color";
import Inspirations from "./Inspirations";

import { useState } from "react";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  // const quote = Quotes[index];
  const inspiration = Inspirations[index];
  // const next = () => setIndex((index + 1) % Quotes.length);
  const next = () => setIndex((index + 1) % Inspirations.length);

  return (
    <>
      {/* <p>Your Inspirational quote is: </p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children} */}

      <p>Your Inspirational {inspiration.type} is: </p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
