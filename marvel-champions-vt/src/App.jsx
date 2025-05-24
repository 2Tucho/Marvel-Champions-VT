import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { VillainPlayedContext } from "./context/VillainPlayedContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/pages/_App.scss";


const App = () => {
  const [villainPlayed, setVillainPlayed] = useState()

  return (<>

    <BrowserRouter>
      <VillainPlayedContext.Provider value={{villainPlayed, setVillainPlayed}}>
        <Header villainPlayed={villainPlayed}/>
        <Main setVillainPlayed={setVillainPlayed}/>
        <Footer />
      </VillainPlayedContext.Provider>
    </BrowserRouter>

  </>)
}

export default App
