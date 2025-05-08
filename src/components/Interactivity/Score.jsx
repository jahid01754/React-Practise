import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState(0);

  //This method is not recommended because it doesn't use the previous state value
  // const handleClick = () => {
  //   setScore(score + 1);
  // };

  //Better then the above method
  // const handleClick = () => {
  //   setScore((prevScore) => prevScore + 1);
  // };

  //This method is the best because it allows you to pass any amount to the function and it is more flexible
  // function name should be "IncrementScore" or "updateScore"
  const handleClick = (amount) => {
    setScore((prevScore) => prevScore + amount);
  };

  return (
    <>
      <div>
        {/* <button onClick={handleClick}>+1</button> */}
        {/* <button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </button> */}
        <button onClick={() => handleClick(1)}>+1</button>
        <button onClick={() => handleClick(3)}>+3</button>
        <button onClick={() => handleClick(5)}>+5</button>
        <h1>Score: {score}</h1>
      </div>
    </>
  );
}
