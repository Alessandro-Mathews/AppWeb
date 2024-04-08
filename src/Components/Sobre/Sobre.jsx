import React from "react";
import './Sobre.css';
import image from "../Assets/image.jpg"

const Sobre = () => {
    return(
        
        <body className="sobre-container">
        <h1 className="Sobre-title">Sobre</h1>
        <img className="image" src={image} alt="Teste"></img>
        </body>
    )
}

export default Sobre;