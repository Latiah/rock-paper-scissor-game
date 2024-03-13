/*import React, { useState } from "react";
import paperImage from "./images/icon-paper.svg";
import scissorImage from "./images/icon-scissors.svg";
import triangle from "./images/bg-triangle.svg";
type Choice = "rock" | "paper" | "scissors";
const Message = () => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const UserChoice = (option: Choice) => {
    setUserChoice(option);
  };

  return (
    <>
      <div
        className="paper"
        onClick={() => UserChoice("paper")}
        style={{ cursor: "pointer" }}
      >
        <img src={paperImage} alt="rock icon" />
        <img src={triangle} alt="rock icon" className="triangle" />
      </div>
      <div
        className="scissor"
        onClick={() => UserChoice("scissors")}
        style={{ cursor: "pointer" }}
      >
        <img src={scissorImage} alt="scissor icon" />
      </div>
    </>
  );
};
export default Message;
*/
