const Celular = require('../models/xiaomi')

const cellControllers = {
	getCellPhones: async(req,res)=>{
		let cellPhones
		let error = null
		try {
			cellPhones = await Celular.find()
		} catch (err) {error = err
		console.error(error)}
		res.json({
			response: error ? 'ERROR' : {cellPhones},
			success: error ? false : true,
			error: error
		})
	},

	getOneCellPhone: async(req,res)=>{
		const id = req.params.id
		let cellPhone
		let error = null
		try {
			cellPhone = await Celular.findOne({_id:id})
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : cellPhone,
			success: error ? false : true,
			error: error
		})
	},
	
	addCellPhone: async(req,res)=>{
		const {name,brand, description, features, details, image, tags} = req.body
		let cellPhone
		let error = null
		try{
			cellPhone = await new Celular({
				name:name,
				brand: brand,
				description:description,
				features:features,
				details: details,
				image:image,
				tags: tags
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : cellPhone,
			success: error ? false : true,
			error: error
		})
	},

	modifyCellPhone: async(req,res)=>{
		const id = req.params.id
		const celular = req.body
		let cellPhoneDb
		let error = null
		try{
			cellPhoneDb = await Celular.findOneAndUpdate({_id:id},celular,{new: true})
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : cellPhoneDb,
			success: error ? false : true,
			error: error
		})
	},

	removeCellPhone: async(req,res)=>{
		const id = req.params.id
		let cellPhoneDb
		let error = null
		try{
			cellPhoneDb = await Celular.findOneAndDelete({_id: id})
		}catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : cellPhoneDb,
			success: error ? false : true,
			error: error
		})
	}
}
module.exports = cellControllers