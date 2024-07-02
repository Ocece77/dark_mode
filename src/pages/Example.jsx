import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Link } from "react-router-dom";



function Example() {
  const {mode , toggleMode} = useContext(ThemeContext)
  return (
    <>

    <div className="flex flex-col gap-4 justify-center items-center h-full px-20">
      <h1 className="text-3xl font-bold ">
        {`This is an example of items in ${mode ? 'dark 🌙' : "light ☀️"} mode`}
      </h1>
      <p className="text-2xl  font-bold block">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga recusandae aliquam, veniam a mollitia eos aut? Eveniet ex suscipit tempora quas est! Alias, consectetur provident aut perferendis dolore consequuntur possimus.
      </p>
      <div className="grid grid-cols-2 gap-6 ">
      <Link to="/" className="border border-sky-600 font-bold text-2xl rounded-lg h-fit text-sky-600 p-5 hover:bg-sky-50 hover:transition-all hover:scale-110">
        Return one the homepage
      </Link> 
      <button onClick={()=>toggleMode()} className="border border-sky-600 font-bold text-2xl rounded-lg h-fit text-sky-600 p-5 hover:bg-sky-50 hover:transition-all hover:scale-110">
        clicked me
      </button> 
      </div>
   
    </div>
    </>
  )
}

export default Example;
