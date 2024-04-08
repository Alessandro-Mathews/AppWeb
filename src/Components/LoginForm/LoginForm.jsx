import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginForm = () => {
    return (
        <body className="Principal">
        <div className="Container">
            <form action="" >
                <h1> Login </h1>
                <div className="input-box">
                    <input type="text" placeholder="Nome de usuário" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type='password' placeholder="Senha" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox' />Lembre-se</label>
                    <Link to="/sobre">Sobre</Link>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                        <p>Não possui uma conta? <Link to="/register">Registre-se</Link></p>
                </div>
            </form>
        </div>
        </body>
    )
}

export default LoginForm;