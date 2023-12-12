export default function Search({setFoodText}:{setFoodText:React.Dispatch<React.SetStateAction<string | undefined>>}) {
  return (
    <input
      onChange={e=>setFoodText(e.target.value)}
      placeholder="Search Food...."
      className="outline text-white outline-[#FF4343] outline-1 bg-[#323334] rounded-md mt-4 py-2 px-3 w-[20em]"
    />
  );
}
