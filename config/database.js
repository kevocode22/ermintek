const mongoose = require('mongoose')

mongoose.connect(procces.env.MONGO,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=>console.log('Database connected'))
.catch(err => console.error(err))
