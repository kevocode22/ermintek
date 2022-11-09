const joi = require('joi')

const validator = (req, res, next) => {
    //console.log("req.body es")
    //console.log(req.body)
    const schema = joi.object({
        nombre: joi.string()
            .max(20)
            .min(3)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': 'name: min 3 characters',
                'string.max': 'name: max 20 characters'
            }),
            apellido: joi.string()
            .min(1)
            .max(30)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': 'apellido: min 3 characters',
                'string.max': 'apellido: max 30 characters',
            }),
        email: joi.string().email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': '"mail": incorrect format'
            }),
        contraseña: joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': '"password": min 8 characters',
                'string.max': '"password": max 30 characters'
            }),
            imagen: joi.string()
            .min(4)
            .trim()
            .required(),
        from: joi.string()
    })
    const validation = schema.validate(req.body.data, { abortEarly: false })
    console.log("VALIDATION", validation)
    if (validation.error) {
        return res.json({ success: false, from: 'validator', message: validation.error.details, test: validation })
    }
    next()
}

module.exports = validator