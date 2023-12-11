const imagesArr = [
  "/images/dice/dice_1.png",
  "/images/dice/dice_2.png",
  "/images/dice/dice_3.png",
  "/images/dice/dice_4.png",
  "/images/dice/dice_5.png",
  "/images/dice/dice_6.png",
];

export default function RollDice({
  setDiceIndex,
  diceIndex,
}: {
  diceIndex: number;
  setDiceIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  function getRandomIndex() {
    setDiceIndex(Math.floor(Math.random() * 6));
  }
  return (
    <div onClick={() => getRandomIndex()}>
      <img src={imagesArr[diceIndex]} alt={imagesArr[diceIndex]} />
    </div>
  );
}
