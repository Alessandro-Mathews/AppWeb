import React from "react";
import './Sobre.css';
import image from "../Assets/image.jpg"

const Sobre = () => {
    return(
        
        <body className="sobre-container">
        <h1 className="Sobre-title">Sobre</h1>
        <div className="container-img"><img className="image" src={image} alt="Teste"></img> </div>
            <div className="texto1">
        <p>O aplicativo foi desenvolvido com o intuito de reportar denúncias de problemas rodoviários para os responsáveis, visando a validação da informação e a possível resolução para o problema.</p>
        <div className="texto2">
        <p>Grupo e funções:</p>
        <p>Front: Eduardo Marinho, Guilherme e João.</p>
        <p>Back: Kawã e Eduardo Oliveira.</p>
        <p>QA: Alessandro, Paulo e Júlia.</p>
        </div>
            </div>
        </body>
    )
}

export default Sobre;