import logo from "/logo.svg";
import Search from "./components/Search";
import Button from "./components/Button";
import Card from "./components/Card";
import { useEffect, useState, useCallback } from "react";
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
  const [filterText, setFilterText] = useState<string | undefined>("");
  const [cardsData, setCardsData] = useState<IData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000")
      .then(({ data }) => setCardsData(data))
      .catch((e) => console.error(e));
  }, []);

  const handleButtonClick = useCallback((text: string) => {
    setFilterText(text === "All" ? "" : text);
  }, []);

  const filteredCards = cardsData.filter((data) => {
    if (!filterText) return true; // Show all if filterText is empty or "All"
    const lowerCaseFilter = filterText.toLowerCase();
    return (
      data.name.toLowerCase().includes(lowerCaseFilter) ||
      data.type.toLowerCase().includes(lowerCaseFilter)
    );
  });

  return (
    <div className="h-screen w-screen bg-[#323334] flex flex-col items-center overflow-x-hidden">
      <img src={logo} alt="logo" className="w-[15em] mt-5 flex mx-auto" />
      <Search setFoodText={(text) => setFilterText(text)} filterText={filterText} />

      <div className="flex flex-row max-w-lg mx-auto space-x-3 mt-10">
        {buttonsText.map((d) => (
          <Button buttonsClickHandler={handleButtonClick} key={d} text={d} />
        ))}
      </div>

      <div className="bg-[url('../bg.png')] bg-no-repeat bg-cover mt-10 h-screen w-screen overflow-scroll">
        <div className="space-y-4 flex flex-col px-6 py-6">
          {filteredCards.map((data, id) => (
            <Card key={`${data.name}-${id}`} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
