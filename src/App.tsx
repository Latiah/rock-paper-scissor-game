import React, { useState } from "react";
import "./styles/Message.css";
import "./styles/header.css";
import Rules from "./Rules";
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
  const [showResults, setShowResults] = useState(false);
  const [showGame, setShowGame] = useState(true);
  const UserChoice = (option: Choice) => {
    setUserChoice(option);
    setComputerChoice(ComputerChoice());
    winnerScore(option);
    setShowResults(true);
    setShowGame(false);
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
    } else if (
      (user === "rock" && computer === "rock") ||
      (user === "paper" && computer === "paper") ||
      (user === "scissors" && computer === "scissors")
    ) {
      setScoreCount(scoreCount);
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
      return "IT IS A TIE !";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "YOU WON";
    } else {
      return "THE HOUSE WON";
    }
  };
  const visible = () => {
    setShowGame(true);
    setShowResults(false);
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
      {showGame && (
        <>
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
              className="scissors"
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
        </>
      )}
      {showResults && (
        <>
          <div className="results">
            <h1>
              YOU PICKED
              {userChoice && (
                <div className={userChoice}>
                  <img
                    src={
                      userChoice === "rock"
                        ? rockImage
                        : userChoice === "paper"
                        ? paperImage
                        : scissorImage
                    }
                    alt="your choice"
                  />
                </div>
              )}
            </h1>
            <div className="winner">
              <h1>{gettingWinner()}</h1>
              <button className="game-btn" onClick={visible}>
                PLAY AGAIN
              </button>
            </div>

            <h1>
              THE HOUSE PICKED
              {computerChoice && (
                <div className={computerChoice}>
                  <img
                    src={
                      computerChoice === "rock"
                        ? rockImage
                        : computerChoice === "paper"
                        ? paperImage
                        : scissorImage
                    }
                    alt="house choice"
                  />
                </div>
              )}
            </h1>
          </div>
        </>
      )}
      <div className="button-position">
        <Rules />
      </div>
    </>
  );
};
export default App;
