import "./portfolioList.scss"

export default function PortfolioList({id, title,ativo, setSelected }) {
    return (
        <li className={ativo ? "portfolioList ativo" : "portfolioList"} onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
