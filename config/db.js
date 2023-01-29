const mongoose=require('mongoose')
mongoose.set('strictQuery', true)


const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log('Db connected successfully')

    })

}

module.exports=connectDb