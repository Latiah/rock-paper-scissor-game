import React, { useState } from "react";
import "./styles/Message.css";
import "./styles/header.css";
import Rules from "./Rules";
import winner from "./winner";
import paperImage from "./images/icon-paper.svg";
import scissorImage from "./images/icon-scissors.svg";
import triangle from "./images/bg-triangle.svg";
import rockImage from "./icon-rock.svg";
import logImage from "./images/logo.svg";
type Choice = "rock" | "paper" | "scissors";

const App = () => {
  const [scoreCount, setScoreCount] = useState(0);
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const UserChoice = (option: Choice) => {
    setUserChoice(option);
    setComputerChoice(ComputerChoice());
    winnerScore(option);
  };
  const winnerScore = (user: Choice) => {
    const computer = ComputerChoice();
    setComputerChoice(computer);
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setScoreCount(scoreCount + 1);
    } else {
      setScoreCount(0);
    }
  };
  //random choice for computer
  const ComputerChoice = () => {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };
  const gettingWinner = () => {
    if (userChoice === computerChoice) {
      return "It is a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "YOU WIN";
    } else {
      return "THE HOUSE WON";
    }
  };
  return (
    <>
      <div className="header-elements">
        <div>
          <img src={logImage} alt="log" />
        </div>
        <div className="scores">
          <h4>SCORE</h4>
          <h1 className="score-number">{scoreCount}</h1>
        </div>
      </div>
      <div className="circles">
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
      </div>

      <div className="circles">
        <div
          className="rock"
          onClick={() => UserChoice("rock")}
          style={{ cursor: "pointer" }}
        >
          <img src={rockImage} alt="paper -icon" />
        </div>
      </div>

      <h1>YOU PICKED :{userChoice}</h1>
      <h1>THE HOUSE PICKED : {computerChoice}</h1>
      <h1>{gettingWinner()}</h1>
      <h1>Number of your scores: {scoreCount}</h1>

      <div className="button-position">
        <Rules />
      </div>
    </>
  );
};
export default App;
