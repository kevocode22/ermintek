import { useNavigate as navigate } from 'react-router-dom';
import { useDispatch as dispatch } from 'react-redux';
import usuariosActions from '../../../redux/actions/usuariosActions'
import toast from "react-hot-toast";

const functionsContext =  {

 loginSubmit: async (event) => {
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
},


signUpSubmit : async (event) => {
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

}
export default functionsContext