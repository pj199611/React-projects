export default function Button({text,buttonsClickHandler}:{text:string,buttonsClickHandler:Function}){
        return <button onClick={()=>buttonsClickHandler(text)} className="text-white bg-[#FF4343] px-4 py-2 rounded-md">{text}</button>
}