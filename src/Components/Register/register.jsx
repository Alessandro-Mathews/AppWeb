import React from "react";
import './register.css';

const Register = () => {
    return (
        <body className="Principal-register">
        <div className="Container">
            <form action="" >
                <h1> Registre-se </h1>
                <div className="register-input-box">
                    <input type="text" placeholder="Nome de usuário" required />
                </div>
                <div className="register-input-box">
                    <input type='password' placeholder="Senha" required />
                </div>
                <div className="register-input-box">
                    <input type='password' placeholder="Confirme sua senha" required />
                </div>
                <button type="register-submit">Cadastre-se</button>

            </form>
        </div>
        </body>
    )
}

export default Register;