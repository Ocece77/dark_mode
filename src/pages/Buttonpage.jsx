import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Link } from "react-router-dom";


function Buttonpage() {

  const {mode  , toggleMode } = useContext(ThemeContext)

  return (
    <>

    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="text-4xl font-bold block">{`Active ${mode ? 'light☀️ ' : "dark 🌙"} mode`} </h1>
     <button onClick={()=>toggleMode()} className="border border-sky-600 font-bold text-2xl rounded-lg h-fit text-sky-600 p-5 hover:bg-sky-50 hover:transition-all hover:scale-110">
        clicked me
      </button> 
      <Link to="/example" className="border border-sky-600 font-bold text-2xl rounded-lg h-fit text-sky-600 p-5 hover:bg-sky-50 hover:transition-all hover:scale-110">
        See example
      </Link>
    </div>
    </>
  )
}

export default Buttonpage;
