import { Link } from "react-router-dom"

export const Navbar = ()=>{
   return(
    <>
      <nav className=" flex w-full font-bold text-sky-600 gap-5 p-5">
        <Link to="/" className="hover:text-sky-300 ">Home</Link>
        <Link to="/example" className="hover:text-sky-300 ">example</Link>
      </nav>
    </>
   )
}