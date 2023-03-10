const express=require("express")


const dotenv=require('dotenv')
var cors = require('cors')
const connectDb=require('./config/db') 
const userRoutes=require('./routes/userRoutes')
const noteRoutes=require('./routes/noteRoutes')
const {notFound,errorHandler}=require('./middlewares/errorMiddlewares')
const app=express()
app.use(cors())
dotenv.config()
connectDb()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server started on PORT ${PORT}`))