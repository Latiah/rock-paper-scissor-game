import React, { useState } from "react";

// Define types for the choices
type Choice = "rock" | "paper" | "scissors";

const RPSGame: React.FC = () => {
  // State to store user and computer choices
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  // Function to generate a random choice for the computer
  const generateComputerChoice = (): Choice => {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // Function to handle user choice
  const handleUserChoice = (choice: Choice) => {
    setUserChoice(choice);
    setComputerChoice(generateComputerChoice());
  };

  // Function to determine the winner
  const determineWinner = () => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
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
          <p>{determineWinner()}</p>
        </div>
      )}
    </div>
  );
};

export default RPSGame;
