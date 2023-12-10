import Header from "./components/header";
import HeroImage from "/images/hero-image.png";

function App() {
  return (
    <div className="w-screen h-screen bg-red-100">
      <Header />
      <div className="flex mx-auto flex-row max-w-[calc(100%-40%)] mt-40 ">
        <div className="flex item-start flex-col">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-8xl uppercase">Your Feet </h1>
            <h1 className="font-bold text-8xl uppercase">Deserve</h1>
            <h1 className="font-bold text-8xl uppercase">The best</h1>
          </div>
          <h3 className="mt-10 font-bold text-[#5A5959] ">
            YOUR FEET DESERVE THE BESTAND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </h3>
          <div className="flex flex-row space-x-2 mt-10 space-x-8">
            <button className="bg-red-500 p-2 text-white rounded-md">
              <p className="font-semibold">Shop Now</p>
            </button>
            <button className="bg-white p-2 rounded-md">
              <p className="font-semibold text-[#5A5959]">Category</p>
            </button>
          </div>
          <h4 className="mt-10 text-[#5A5959] font-semibold">
            Also Available On
          </h4>
          <div className="space-x-1 flex flex-row items-center mt-5 space-x-5">
            <img className="hover:scale-110 duration-1000" src="/images/flipkart.png"></img>
            <img className="hover:scale-110 duration-1000" src="/images/amazon.png"></img>
          </div>
        </div>
        <div>
          <img className="max-w-lg mt-10 ml-10" src={HeroImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
