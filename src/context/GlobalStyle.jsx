
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { DarkModeStyle } from '../utils/Style'


export const GlobalStyle = () =>{
  const {mode} = useContext(ThemeContext)

 return(
     <DarkModeStyle mode={mode}/>
 )
}