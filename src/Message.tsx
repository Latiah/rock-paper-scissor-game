import paperImage from "./images/icon-paper.svg";
import scissorImage from "./images/icon-scissors.svg";
import triangle from "./images/bg-triangle.svg";
type Option = "rock" | "paper" | "scissors";
const Message = () => {
  const UserChoice = (option: Option) => {};
  return (
    <>
      <div className="paper" onClick={() => UserChoice("rock")}>
        <img src={paperImage} alt="rock icon" />
        <img src={triangle} alt="rock icon" className="triangle" />
      </div>
      <div className="scissor">
        <img src={scissorImage} alt="scissor icon" />
      </div>
    </>
  );
};
export default Message;
