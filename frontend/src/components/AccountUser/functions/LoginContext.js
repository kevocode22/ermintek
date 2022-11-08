import { createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import usuariosActions from '../../../redux/actions/usuariosActions'
import toast from "react-hot-toast";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSubmit = async (event) => {
        event.preventDefault();
        const loginUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "formulario-inicio",
        };
        let res = await dispatch(usuariosActions.inicioSesion(loginUser));
        if (res.data.success) {
            toast.success(res.data.message);
            navigate("/");
        } else {
            toast.error(res.data.message);
        }
    }

    const signUpSubmit = async (event) => {
        event.preventDefault();
        const data = {
            nombre: event.target[0].value,
            email: event.target[1].value,
            contraseña: event.target[2].value,
            from: "formulario-registro",
        };
        let res = await dispatch(usuariosActions.registrarse(data));
        let errorSignUp = res.data.message;
        if (res.data.from === "validator") {
            errorSignUp.forEach((e) => {
                toast.error(e.message);
            });
        }
        if (res.data.success) {
            toast.success(res.data.message);
            navigate("/signin");
        } else {
            toast.error(res.data.message);
        }
    }

    return (
        /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
        <LoginContext.Provider
            value={{ signUpSubmit, loginSubmit }}
        >
            {children}
        </LoginContext.Provider>
    );

}
export default LoginContext