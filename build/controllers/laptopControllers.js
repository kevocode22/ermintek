const Laptop = require('../models/computadoras')


const laptopControllers = {
	getLaptops: async(req,res)=>{
		let laptops
		let error = null
		try {
			laptops = await Laptop.find()
		} catch (err) {error = err
		console.error(error)}
		res.json({
			response: error ? 'ERROR' : {laptops},
			success: error ? false : true,
			error: error
		})
	},

	getOneLaptop: async(req,res)=>{
		const id = req.params.id
		let laptop
		let error = null
		try {
			laptop = await Laptop.findOne({_id: id})
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : laptop,
			success: error ? false : true,
			error: error
		})

	},
	
	addLaptop: async(req,res)=>{
		const {name,brand, description, features, price, image, tags} = req.body
		let laptop
		let error = null
		try{
			laptop = await new Laptop({
				name:name,
				brand: brand,
				description:description,
				features:features,
				price: price,
				image:image,
				tags: tags
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : laptop,
			success: error ? false : true,
			error: error
		})

	},

	modifyLaptop: async(req,res)=>{
		const id = req.params.id
		const laptop = req.body
		let laptopDb
		let error = null
		try{
			laptopDb = await Laptop.findOneAndUpdate({_id:id},laptop,{new: true})
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : laptopDb,
			success: error ? false : true,
			error: error
		})
	},

	removeLaptop: async(req,res)=>{
		const id = req.params.id
		let laptopDb
		let error = null
		try{
			laptopDb = await Laptop.findOneAndDelete({_id: id})
		}catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : laptopDb,
			success: error ? false : true,
			error: error
		})
	},

	likeDislike: async (req, res) => {
        const { idLaptop } = req.body
        let cantidad = 1
        try {
            let likeExiste = await Laptop.findOne({ idLaptop })
           
            if (likeExiste !== null) {

                cantidad = parseFloat(likeExiste.likes) + 1
                const likesDone = await Laptop.findOneAndUpdate({ idLaptop }, {
                    $set: {
                        "likes": cantidad
                    }
                }, { new: true })
                res.json({
                    success: true,
                    response: { likesDone },
                    message: "Tus favoritos se han actualizado"
                })
            }
            else {
                const likesDones = await Laptop({ idLaptop, cantidad }).save()
                res.json({
                    success: true,
                    response: { likesDones },
                    message: "Gracias por tu Like"
                })
            }
        }
        catch (error) {
            res.json({
                success: false,
                message: "Perdón, no pudimos añadirlo a tus favoritos 😞"
            })
        }
    },
}
module.exports = laptopControllers