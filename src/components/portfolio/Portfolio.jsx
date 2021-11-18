import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { projetosDHPortfolio,
projetosPessoaisPortfolio} from "../../data.js";

export default function Portfolio() {

    const[selected,setSelected] = useState("projetosDH");
    const[data,setData] = useState([]);

    const list = [
        {
         id: "projetosDH",
         title: "Projetos DH",
        },
        {
         id: "projetosPessoais",
         title: "Projetos Pessoais",
        },

    ];

    useEffect(()=>{

        switch(selected){
            case "projetosDH":
                setData(projetosDHPortfolio);
                break;
            case "projetosPessoais":
                setData(projetosPessoaisPortfolio);
                break;
            default:
                setData(projetosDHPortfolio);
        }
    },[selected])

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title} 
                    ativo={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id} 
                    />
                    
                ))}    
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div>
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                            
                        </div>
                        <a href={d.site}><img src="../../assets/site.png" alt="" /></a>
                        <a href={d.github}><img src="../../assets/25231.png" alt="" /></a>
                    </div>
                ))}    
            </div>
        </div>
    )
}
