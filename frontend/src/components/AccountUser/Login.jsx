import React, { useState } from "react";
import "../../styles/signIn.css";
import Brand from "../../assets/Logos/logoDarkTransparent.png";
import bgrnd from "../../assets/bg-orange.jpg";
import GoogleSignIn from "./GoogleSingIn";
import GoogleSignUp from "./GoogleSignUp";
import LoginContext from "./functions/LoginContext";
import { useContext } from "react";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  const { signUpSubmit, loginSubmit} = useContext(LoginContext) 
  
  console.log(signUpSubmit)


  return (
    <div className="formContainer">
      <div className={`container ${addclass}`} id="container">
        <div className="form-container sign-up-container font-['Oswald'] font-semibold  text-lg">
          <form onSubmit={signUpSubmit}>
            <img src={Brand} alt="ermintek-logo" className="h-24" />
            <h1>Crear Cuenta</h1>
            <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input type="text" placeholder="Nombre" />
            </span>

            <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              <input type="email" placeholder="Email" />
            </span>

            <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <input type="password" placeholder="Contraseña" />
            </span>
            <button className="formButton" type="submit">
              Registrarse
            </button>
            <div className="flex justify-center mt-3">
              <p className="mr-2">o registrate con Google </p>
              <GoogleSignUp />
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container font-['Oswald'] font-semibold text-lg">
          <form onSubmit={loginSubmit}>
            <img src={Brand} alt="ermintek-logo" className="h-24" />
            <h1>Inicia sesión</h1>
            <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              <input type="email" placeholder="ejemplo@mail.com" />
            </span>
            <span className="flex items-center leading-normal border-0 rounded rounded-r-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <input type="password" placeholder="Mi contraseña" />
            </span>

            <button className="formButton" type="submit">
              Iniciar sesión
            </button>
            <div className="flex justify-center mt-3">
              <p className="mr-2">o inicia sesión con Google:</p>
              <GoogleSignIn />
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className="overlay-panel overlay-left text-white font-['Bebas_Neue'] text-3xl"
              style={{
                backgroundImage: `url(${bgrnd})`,
                backgroundSize: "cover",
              }}
            >
              <p>¿Ya tenés una cuenta?</p>

              <button
                className="ghost"
                id="signIn"
                onClick={() => setaddclass("")}
              >
                INICIA SESIÓN
              </button>
            </div>
            <div
              className="overlay-panel overlay-right font-['Bebas_Neue'] text-3xl"
              style={{
                backgroundImage: `url(${bgrnd})`,
                backgroundSize: "cover",
              }}
            >
              <p>¿Todavía no estás registrado?</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setaddclass("right-panel-active")}
              >
                REGISTRATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
