import logo from "/logo.svg";
import Search from "./components/Search";
import Button from "./components/Button";
import { useEffect } from "react";
import axios from "axios";

const buttonsText = ["All", "Breakfast", "Lunch", "Dinner"];
export default function App() {
  function buttonsClickHandler(text: string) {
    console.log(text);
  }

  return (
    // adding mobile related css classes
    <div className="h-screen w-screen bg-[#323334] flex flex-col items-center overflow-x-hidden">
      <img src={logo} alt="logo" className="w-[15em] mt-5 flex mx-auto" />
      <Search />

      <div className="flex flex-row max-w-lg mx-auto space-x-3 mt-10">
        {buttonsText.map((d) => {
          return (
            <Button
              buttonsClickHandler={buttonsClickHandler}
              key={d}
              text={d}
            ></Button>
          );
        })}
      </div>
      <div className="bg-[url('../bg.png')] bg-no-repeat bg-cover mt-10 h-screen w-screen flex flex-col px-2 ">



      </div>
    </div>
  );
}
