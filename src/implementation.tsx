import React, { useState } from "react";

// Define type for the options
type Option = "rock" | "paper" | "scissors";

const RockPaperScissors: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Option | null>(null);
  const [computerChoice, setComputerChoice] = useState<Option | null>(null);
  const [result, setResult] = useState<string>("");

  // Function to handle user's choice
  const handleUserChoice = (option: Option) => {
    setUserChoice(option);
    // Generate random choice for the computer
    const computerOptions: Option[] = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerOption = computerOptions[randomIndex];
    setComputerChoice(computerOption);
    // Determine the result
    if (option === computerOption) {
      setResult("It's a tie!");
    } else if (
      (option === "rock" && computerOption === "scissors") ||
      (option === "paper" && computerOption === "rock") ||
      (option === "scissors" && computerOption === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handleUserChoice("rock")}>Rock</button>
        <button onClick={() => handleUserChoice("paper")}>Paper</button>
        <button onClick={() => handleUserChoice("scissors")}>Scissors</button>
      </div>
      {userChoice && computerChoice && (
        <div>
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
