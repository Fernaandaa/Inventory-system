import React, { useState } from "react";
import "./Login.css";

const Login = () => {

    //State para iniciar sesion
    const [usuario, setGuardarUsuario] = useState({
        email: '',
        password: ''
    });

    //Extraer del usuario

    const {email, password} = usuario;

    const onChange = e => {
        setGuardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }


    //Cuando el usuario quiere iniciar sesion
     const onSubmit = e => {
         e.preventDefault();
     }


    return (
        <>
        <div className="form-usuario">
            <div className="contenedor-form ">
                <h1>INICIAR SESION</h1>

                <form
                    onSubmit={onSubmit}
                
                >
                    <div className="campo-form 2">
            
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo">
                        <input className="btn" type="submit" value="Iniciar Sesion" />
                    </div>
                   
                </form>
            </div>

        </div>
       
        </>

    );



}

export default Login;

