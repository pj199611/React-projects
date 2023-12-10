import Header from "../public/images/logo.png";
import Contact from "../public/images/contact.svg";
import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState<Record<string, string>>();

  const handleFormInput = (e: any) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const postHandler = (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:4000",formData).then(()=>{
        console.log("done")
    })
  };
  return (
    <form onSubmit={(e) => postHandler(e)}>
      <div className="h-screen w-screen bg-color-[#FFF]">
        {/* heading section */}
        <div className=" max-w-7xl p-5 mx-auto">
          <img
            className="h-15 hover:scale-110 duration-110 hover:animate-bounce"
            src={Header}
          />
        </div>
        <div className="max-w-5xl mx-auto mt-20">
          <div className="flex flex-col">
            {/* heading */}
            <h1 className="uppercase text-4xl font-bold">contact us</h1>
            <h3 className="mt-5 font-semibold">
              LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
              WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU
              CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
              PHONE, EMAIL, OR SOCIAL MEDIA.
            </h3>
          </div>

          {/* main form area with images*/}
          <div className="flex flex-col md:flex-row md:mt-[2em] space-x-6">
            <div className="w-full md:w-1/2 mt-14">
              {/* form */}
              <div className="flex flex-col">
                {/* buttons */}
                <div className="flex flex-row space-x-4 w-full">
                  <button className="uppercase bg-black text-white px-6 py-2 font-semibold rounded-md w-1/2">
                    Via support Chat
                  </button>
                  <button className="uppercase bg-black text-white px-10 py-2 font-semibold rounded-md w-1/2">
                    Via Call
                  </button>
                </div>
                <button className="uppercase mt-8 outline outline-2 px-6 py-2 rounded-md font-bold ring-black-500">
                  Via Email Form
                </button>
                <div className="flex flex-col px-2 mt-15 mt-5">
                  <div>
                    <input
                      onChange={(e) => handleFormInput(e)}
                      id="name"
                      className=" transition  p-2 focus:outline-none focus:ring focus:ring-violet-300 outline outline-1 rounded-md w-full mb-2 focus:ring-blue"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <input
                      onChange={(e) => handleFormInput(e)}
                      id="email"
                      className=" transition  focus:outline-none focus:ring focus:ring-violet-300 p-2 outline outline-1 rounded-md mt-1 w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      onChange={(e) => handleFormInput(e)}
                      id="message"
                      className=" transition  focus:outline-none focus:ring focus:ring-violet-300 p-2 outline outline-1 mt-3 rounded-md w-full"
                      rows={5}
                      placeholder="Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="uppercase bg-black text-white px-10 py-2 mt-4 rounded-md w-auto ml-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={Contact} className="h-full" alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
