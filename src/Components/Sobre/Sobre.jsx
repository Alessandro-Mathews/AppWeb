import React from "react";
import './Sobre.css';
import image from "../Assets/image.jpg"

const Sobre = () => {
    return(
        
        <div className="sobre-container">
        <h1 className="Sobre-title">Sobre</h1>
            <div>
                <img className="image" src={image} alt="Teste"></img>
            </div>
        </div>
    )
}

export default Sobre;