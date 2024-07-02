import { useState  , createContext } from "react";
import { PropTypes } from "prop-types";


 export const ThemeContext = createContext()

 export const ThemeProvider = ({children}) =>{
  const [mode, setMode] = useState(false)
  const toggleMode = ()=>{
    setMode(!mode)
  }

  return (
    <ThemeContext.Provider value={{mode, toggleMode}}>
      {children}
    </ThemeContext.Provider>
  )

 }

 ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};