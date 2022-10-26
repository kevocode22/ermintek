import axios from 'axios';

let localUrl = 'http://localhost:4000'

const usuariosActions = {

    registrarse: (userData) => {
        console.log(userData)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(localUrl + `/api/registrarse`,{userData})
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }

        }
    },

    inicioSesion: (loginUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post(localUrl+`/api/iniciarsesion`, { loginUser })
            // console.log(res)
            //primero verifico que el success sea true
            if (res.data.success) {
                localStorage.setItem("token", res.data.response.token) //tomo el token que le envie desde el back y lo envio al local storage
                dispatch({ type: "USER", payload: res.data.response.usuarioData });
            }
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },

    desloguearse: () => {
        return async (dispatch, getState) => {
          localStorage.removeItem('token')
            dispatch({
                type: 'USER',
                payload:{
                    message: "Thanks for your visit"
                } 
            })
        }
    },

    verificarToken: (token) => {
        // console.log(token)

        return async (dispatch, getState) => {

            await axios.get(localUrl, {
                headers: {
                    "Authorization": "Bearer " + token //el header espera una autoriz. metodo para autenticar y autozar el usuario
                }
            })
                .then(res => {
                    if (res.data.success) {
                        dispatch({ type: "USER", payload: res.data.response });
                        dispatch({
                            type: "MESSAGE",
                            payload: {
                                view: true,
                                message: res.data.message,
                                success: res.data.success
                            }
                        });
                    } else { localStorage.removeItem("token") }
                })
                .catch(error => {
                    if (error.response.status === 401) //problemas de autenticacion
                        dispatch({
                            type: "MESSAGE",
                            payload: {
                                view: true,
                                message: "Por favor, inicia sesión de nuevo",
                                success: false
                            }
                        })
                    localStorage.removeItem("token")
                })
        }
    }
}


export default usuariosActions