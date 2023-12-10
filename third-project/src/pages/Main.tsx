import DiceNumbers from "../components/DiceNumbers";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6];
const Main = () => {
  const [selectedNumber, setSelectedNumber] = useState<Number>();

  console.log("selectedNumber", selectedNumber);
  return (
    <div className="h-screen w-screen bg-[#FFFFFF]">
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
      </div>
    </div>
  );
};

export default Main;
