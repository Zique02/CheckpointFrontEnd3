import './cabecalho.scss'

export default function cabecalho({ menuOpen, setMenuOpen }) {
    return (
        <div className={"cabecalho " + (menuOpen && "ativado")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">port.React</a>
                    <div className="itemContainer">

                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
