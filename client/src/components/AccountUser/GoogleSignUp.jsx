import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import usuariosActions from "../../redux/actions/usuariosActions"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function GoogleSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    async function handleCallBackResponse(response) {
        let userObject = jwt_decode(response.credential);
   
        const res = await dispatch(usuariosActions.registrarse({
            nombre: userObject.given_name,
            apellido: userObject.family_name,
            email: userObject.email,
            contraseña: userObject.sub,
            imagen: userObject.picture,
            from: "GOOGLE"

        }))
        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/signin')
        } else {
            toast.error(res.data.message)
        }
    
       

    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '653969002854-i6ioa1k7vk4sj30bbcil1qjq2mg67l4u.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { type: "icon", size: "medium", shape: "square" }
        )
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )





}