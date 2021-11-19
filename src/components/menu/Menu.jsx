import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu '+(menuOpen && "ativado")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
            
        </div>
    )
}
