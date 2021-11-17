import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
             showCursor: true,
             backDelay:1500,
             backSpeed:60,
             
             strings: ['Aluno da DH', 'Gamer', 'Quase um FullStack Dev' ],
             });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/eu.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Olá! Eu sou</h2>
                    <h1>Henrique T. Rosa</h1>
                    <h3>e sou <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
