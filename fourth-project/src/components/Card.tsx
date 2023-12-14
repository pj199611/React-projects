interface IData {
  name: String;
  price: number;
  text: String;
  image: String;
  type: String;
}
export default function Card({ data }: { data: IData }) {
  return (
    <div className="hover:scale-110 md:duration-1000 md:max-h-auto text-white bg-black bg-opacity-50 rounded-2xl flex space-x-2">
      <div className="w-4/5">
        <img src={`http://localhost:9000${data.image}`} />
      </div>
      <div className="flex flex-col items-start mt-5">
        <h1>{data.name}</h1>
        <h2 className="text-lg">{data.text}</h2>
        <h3 className="mt-6 mb-4 mr-4 ml-auto bg-[#FF4343] px-4 py-1 rounded-md font-bold">
          ${data.price}
        </h3>
      </div>
    </div>
  );
}
