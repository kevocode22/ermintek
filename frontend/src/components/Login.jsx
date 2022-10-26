import React, { useState } from "react";
import "../styles/signIn.css";
import Brand from '../assets/Logos/logoDarkTransparent.png'
import bgrnd from '../assets/bg-orange.jpg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usuariosActions from "../redux/actions/usuariosActions";
import toast from 'react-hot-toast';

const LoginRegister = () => {
    const [addclass, setaddclass] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginSubmit = async (event) => {
        event.preventDefault()
        const loginUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "formulario-inicio"
        }
        let res = await dispatch(usuariosActions.inicioSesion(loginUser))
        // console.log(res)
        if (res.data.success) {
            toast.success(res.data.message)
            navigate("/")
        } else {
            toast.error(res.data.message)
        }

    }

    const signUpSubmit = async (event) => {
        event.preventDefault()
        // console.log(event.target[4].value)
        const data = {
            nombre: event.target[0].value,
            email: event.target[1].value,
            contraseña: event.target[2].value,
            from: "formulario-registro"

        }

        let res = await dispatch(usuariosActions.registrarse(data))
        let errorSignUp = res.data.message
        if (res.data.from === "validator") {
            errorSignUp.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res?.data.success) {
            toast.success(res.data.message)
            navigate('/signin')
        } else {
            toast.error(res.data.message)
        }
    }


    return (
        <div className="formContainer">
            <div className={`container ${addclass}`} id="container">
                <div className="form-container sign-up-container font-['Oswald'] text-lg">
                    <form onSubmit={signUpSubmit}>
                        <img src={Brand} alt="ermintek-logo" className="h-24" />
                        <h1>Crear Cuenta</h1>

                        <span className="flex items-center leading-normal border-0 rounded rounded-r-none">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg><input required type="text" placeholder="Nombre" /></span>

                        <span className="flex items-center leading-normal border-0 rounded rounded-r-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg><input required type="email" placeholder="Email" /></span>

                        <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg><input required type="password" placeholder="Contraseña" /></span>
                        <button className="formButton" type="submit">Registrarse</button>
                    </form>
                </div>
                <div className="form-container sign-in-container font-['Oswald'] text-lg">
                    <form onSubmit={loginSubmit}>
                        <img src={Brand} alt="ermintek-logo" className="h-24" />
                        <h1>Inicia sesión</h1>
                        <span className="flex items-center leading-normal border-0 rounded rounded-r-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg><input type="email" required placeholder="ejemplo@mail.com" /></span>
                        <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg><input type="password" required placeholder="Mi contraseña" /></span>

                        <button className="formButton" type="submit">Iniciar sesión</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left text-white font-['Bebas_Neue'] text-3xl" style={{ backgroundImage: `url(${bgrnd})`, backgroundSize: "cover" }}>
                            <p>¿Ya tenés una cuenta?</p>

                            <button
                                className="ghost"
                                id="signIn"
                                onClick={() => setaddclass("")}
                            >INICIA SESIÓN</button>
                        </div>
                        <div className="overlay-panel overlay-right font-['Bebas_Neue'] text-3xl" style={{ backgroundImage: `url(${bgrnd})`, backgroundSize: "cover" }}>
                            <p>¿Todavía no estás registrado?</p>
                            <button
                                className="ghost"
                                id="signUp"
                                onClick={() => setaddclass("right-panel-active")}
                            >REGISTRATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;