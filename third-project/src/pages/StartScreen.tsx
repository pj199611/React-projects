import { Link } from "react-router-dom";
import Dices from "/images/dices.png";

const StartScreen = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
      <div className="flex items-center">
        <div>
          <img className="max-w-2xl" src={Dices} alt="dices" />
        </div>
        <div className="flex flex-col">
          <h1 className="uppercase font-bold text-6xl">Dice Game</h1>
          <Link
            to="/main"
            className="ml-auto mt-5 bg-black text-white uppercase font-bold px-8 py-2 rounded-md"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
