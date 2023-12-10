import { ReactNode } from "react";

export default function DiceNumbers({
  numbers,
  setSelectedNumber,
  selectedNumber,
}: {
  selectedNumber: Number | undefined;
  numbers: Number[];
  setSelectedNumber: React.Dispatch<React.SetStateAction<Number | undefined>>;
}) {
  return (
    <div className="flex flex-row space-x-4">
      {numbers.map((number, index) => (
        <div
          onClick={() => setSelectedNumber(number)}
          key={index}
          className={`cursor-pointer outline outline-1 font-bold px-6 py-4 rounded-md ${
            selectedNumber === number ? "bg-black text-white" : "text-black"
          }`}
        >
          <p>{number as ReactNode}</p>
        </div>
      ))}
    </div>
  );
}
