const Joi = require('joi');

const validator = (req, res, next) => {

    const schema = Joi.object({
        nombre: Joi.string()
            .min(3)
            .max(30)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': 'nombre: min 3 characters',
                'string.max': 'nombre: max 30 characters',
            }),
        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required()
            .messages({
                'string.email': '"email": incorrect form'
            }),
        password: Joi.string()
            .min(8)
            .max(40)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': '"contraseña": min 8 characters',
                'string.max': '"contraseña": max 30 characters'
            })

    })
    const validation = schema.validate(req.body.data, { abortEarly: false })
    if (validation.error) {
        return res.json({ success: false, from: 'validator', message: validation.error.details, test: validation })
    }
    next()
}
module.exports = validator