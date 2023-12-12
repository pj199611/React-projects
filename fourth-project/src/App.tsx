import logo from "/logo.svg";
import Search from "./components/Search";
import Button from "./components/Button";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const buttonsText = ["All", "Breakfast", "Lunch", "Dinner"];

interface IData {
  name: String;
  price: number;
  text: String;
  image: String;
  type: String;
}
export default function App() {
  function buttonsClickHandler(text: string) {
    console.log(text);
  }

  const [foodText, setFoodText] = useState<string>();
  const [cardsData, setCardsData] = useState<IData[]>();

  useEffect(() => {
    axios
      .get("http://localhost:9000")
      .then(({ data }) => {
        setCardsData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    // adding mobile related css classes
    <div className="h-screen w-screen bg-[#323334] flex flex-col items-center overflow-x-hidden">
      <img src={logo} alt="logo" className="w-[15em] mt-5 flex mx-auto" />
      <Search setFoodText={setFoodText} />

      <div className="flex flex-row max-w-lg mx-auto space-x-3 mt-10">
        {buttonsText.map((d) => {
          return (
            <Button buttonsClickHandler={buttonsClickHandler} key={d} text={d}></Button>
          );
        })}
      </div>

      {/* Background container with controlled overflow */}
      <div className="bg-[url('../bg.png')] bg-no-repeat bg-cover mt-10 h-screen w-screen overflow-scroll">
        <div className="space-y-4 flex flex-col px-6 py-6">
          {cardsData?.length &&
            cardsData.map((data,id) => {
              return <Card key={id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
}
