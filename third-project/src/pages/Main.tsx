import DiceNumbers from "../components/DiceNumbers";
import RollDice from "../components/RollDice";
import { ReactNode, useState, useEffect } from "react";


const numbers = [1, 2, 3, 4, 5, 6];

const Main = () => {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [score, setScore] = useState<number>(0);
  const [diceIndex, setDiceIndex] = useState<number>(0);
  const [showRules, setShowRules] = useState<boolean>(false);

  useEffect(() => {
    if (diceIndex + 1 === selectedNumber) {
      setScore((prevState) => {
        return prevState + (diceIndex + 1);
      });
    }

    if (selectedNumber !== undefined && diceIndex + 1 !== selectedNumber) {
      setScore((prevState) => {
        return prevState - 2;
      });
    }
  }, [diceIndex]);

  function rules() {
    return (
      <div className="flex flex-col items-start h-50 w-[40em] mt-10 px-4 py-2 bg-[#FBF1F1] ">
        <h1 className="text-xl font-bold">How to play dice game</h1>
        <div className="flex flex-col items-start mt-5">
          <h4>Select any number</h4>
          <h4> Click on dice image</h4>
          <h4>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
            </h4>
            <h4>if you get wrong guess then 2 point will be deducted </h4>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen bg-[#FFFFFF] overflow-auto">
      <div className="flex flex-col max-w-[calc(100%-20em)] mx-auto ">
        {/* header section with dice numbers to the right */}
        <div className="ml-auto mt-16">
          <DiceNumbers
            setSelectedNumber={setSelectedNumber}
            selectedNumber={selectedNumber}
            numbers={numbers}
          />
        </div>
        <h1 className="ml-auto mt-5 font-bold text-2xl">Select Number</h1>
        <div className="top-32 absolute">
          <h1 className="text-6xl ml-6">{score as ReactNode}</h1>
          <h2 className="font-bold">Total Score</h2>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[8em]">
        <RollDice setDiceIndex={setDiceIndex} diceIndex={diceIndex} />
        <button
          onClick={() => setScore(0)}
          className="font-semibold mt-10 outline outline-1 px-10 rounded-md py-1"
        >
          Reset Score
        </button>
        <button
          onClick={() =>
            setShowRules((prevState) => {
              return !prevState;
            })
          }
          className="mt-5 bg-black px-10 py-1 font-semibold text-white rounded-md"
        >
          Show Rules
        </button>

        {showRules && rules()}
      </div>
    </div>
  );
};

export default Main;
