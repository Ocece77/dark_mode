

import { Route, Routes  } from "react-router-dom"
import Buttonpage from "./pages/Buttonpage"
import Example from "./pages/Example"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeProvider"
import { GlobalStyle } from "./context/globalStyle"


function App() {

  return (
    <>
    <ThemeProvider>
      <GlobalStyle/>
      <Navbar/> 
        <Routes>
          <Route path="/" element={<Buttonpage/>}/>
          <Route path="/example" element={<Example/>}/>
        </Routes>
       </ThemeProvider>
    </>
  )
}

export default App
