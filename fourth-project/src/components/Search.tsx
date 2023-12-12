export default function Search({setFoodText,filterText}:{filterText:string,setFoodText:React.Dispatch<React.SetStateAction<string | undefined>>}) {
  return (
    <input
      value={filterText}
      onChange={e=>setFoodText(e.target.value)}
      placeholder="Search Food...."
      className="outline text-white outline-[#FF4343] outline-2 bg-[#323334] rounded-md mt-4 py-2 px-3 w-[20em]"
    />
  );
}
