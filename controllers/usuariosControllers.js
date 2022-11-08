const Usuario = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const enviarVerificacion = require('../config/sendVerification'); 
const crypto = require('crypto');


const usuariosControllers = {
    signUp: async (req, res) => {
        const { nombre, email, contraseña, from } = req.body.data; 
        try {
            const usuarioExiste = await Usuario.findOne({ email });  //si el usuario existe
            const verification = false;
            const uniqueString = crypto.randomBytes(15).toString("hex");
            if (usuarioExiste) {
                if (usuarioExiste.from.indexOf(from) !== -1) { //si es true no le permitiremos volver a registrarse por este medio
                    res.json({
                        success: false,
                        from: from,
                        message: `Este mail ya está registrado, por favor inicia sesión`,
                    });
                } else { 
                    const passwordhashed = bcryptjs.hashSync(contraseña, 10);
                    usuarioExiste.contraseña.push(passwordhashed);
                    usuarioExiste.from.push(from);
                    usuarioExiste.verification = true; 
                    await usuarioExiste.save();
                    res.json({
                        success: true,
                        from: from,
                        message: `No te registraste todavia con esta cuenta, por favor registrate`
                    });
                }
            } else { //si el usuario no existe
                const passwordhashed = bcryptjs.hashSync(contraseña, 10);
                const nuevoUsuario = await new Usuario({ //creare uno con los requerimientos del modelo users
                    nombre,
                    email,
                    contraseña: [passwordhashed],
                    from: [from],
                    uniqueString: uniqueString,
                    verification
                });
                if (from !== "formulario-registro") { //formulario de registro
                    nuevoUsuario.verification = true;
                    await nuevoUsuario.save();
                    res.json({
                        success: true,
                        from: from,
                        message: `Ya te registraste, ya podes ingresar!`,
                    });

                } else {
                    await nuevoUsuario.save();
                    await enviarVerificacion(email, uniqueString);
                    res.json({
                        success: true,
                        from: from,
                        message: `Te enviamos un email a tu casilla para que puedas finalizar el registro`,
                    });
                }
            }
        } catch (error) {
            res.json({
                success: false,
                from: from,
                message: "Algo no ha salido bien, por favor intenta nuevamente",
            });
            console.log(error)
        }
    },

    signIn: async (req, res) => { //para iniciar sesion
        const { email, password, from } = req.body.loginUser;
        console.log(req.body)
        try {
            const usuarioExiste = await Usuario.findOne({ email });
            if (!usuarioExiste) {
                res.json({
                    success: false,
                    from: "no from",
                    message: "El usuario no existe, por favor registrate"
                });
            } else if (usuarioExiste.verification) {
                let passwordMatch = usuarioExiste.contraseña.filter((pass) => bcryptjs.compareSync(password, pass));
                if (from === "formulario-inicio") { //formulario de inicio de sesion
                    if (passwordMatch.length > 0) {
                        const usuarioData = {
                            id: usuarioExiste._id,
                            nombre: usuarioExiste.nombre,
                            email: usuarioExiste.email,
                            contraseña: usuarioExiste.contraseña,
                            from: usuarioExiste.from,
							rol: usuarioExiste.rol,
                        };
                        await usuarioExiste.save();
                        const token = jwt.sign({ ...usuarioData },
                            process.env.SECRET_KEY, {
                            expiresIn: 1000 * 60 * 60 * 24,
                        });
                        res.json({
                            response: { token, usuarioData },
                            success: true,
                            from: from,
                            message: "Bienvenido " + usuarioData.nombre + "!",
                        });
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: `Por favor verifica tu contraseña 🔑`,
                        });
                    }
                } else {
                    if (passwordMatch.length > 0) {
                        const usuarioData = {
                            id: usuarioExiste._id,
                            nombre: usuarioExiste.nombre,
                            email: usuarioExiste.email,
                            contraseña: usuarioExiste.contraseña,
                            from: usuarioExiste.from,
							rol: usuarioExiste.rol,
                        };
                        await usuarioExiste.save();
                        const token = jwt.sign({ ...usuarioData },
                            process.env.SECRET_KEY, {
                            expiresIn: 1000 * 60 * 60 * 24,
                        }
                        );
                        res.json({
                            response: { token, usuarioData },
                            success: true,
                            from: from,
                            message: "Hola " + usuarioData.nombre + " 🖐️",
                        });
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "Todavia no estás registrado con esta cuenta, registrate"
                        });
                    }
                }
            } else {
                res.json({
                    success: false,
                    from: from,
                    message: `Todavia no validaste tu cuenta chequea tu casilla de correo`,
                });
            }
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                from: from,
                message: `Algo salio mal, por favor intentalo en unos minutos`
            });
        }
    },
    desloguearse: async (req, res) => {
        const { email } = req.body
        const usuario = await Usuario.findOne({ email })
        await usuario.save()
        res.json({
            success: true,
            message: "Hasta pronto " + usuario.nombre + " 🖐️"
        })
    },
    verifyToken: (req, res) => {
        console.log("REQ.USUARIO", req.user);
        if (req.user) {
            res.json({
                success: true,
                response: {
                        id: req.user.id,
                        nombre: req.user.nombre,
                        apellido: req.user.apellido,
                        email: req.user.email,
                        imagen: req.user.imagen,
                        rol:   req.user.rol,
                        from: "token",			
                },
                message: "Hola " + req.user.nombre + " 🖐️"
            })
        } else {
            res.json({
                success: false,
                message: "Ingresa a tu cuenta"
            });
        }
    },
    verifyMail: async (req, res) => {
        const { string } = req.params
        const usuario = await Usuario.findOne({ uniqueString: string })
        if (usuario) {
            usuario.verification = true
            await usuario.save()
            res.redirect("http://localhost:3000")
        }
        else {
            res.json({
                success: false,
                message: "Este email no fue verificado, chequea en tu casilla de correo"
            });
        }
    },
}



module.exports = usuariosControllers