import Cabecalho from "./components/cabecalho/Cabecalho";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projetos from "./components/projetos/Projetos";
import Contato from "./components/contato/Contato";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Cabecalho menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projetos/>
        <Contato/>
      </div>
    </div>
  );
}

export default App;
