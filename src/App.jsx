import Cabecalho from "./components/cabecalho/Cabecalho";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contato from "./components/contato/Contato";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import styled from "styled-components";
import Footer from "./components/footer/Footer";


const Container = styled.div`
  height: 100vh;
`

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Cabecalho menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Container>
          <Contato/>
          <Footer/>
        </Container> 
      </div>
    </div>
  );
}

export default App;
