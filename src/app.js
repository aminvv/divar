const express=require('express')
const dotenv=require('dotenv')
const swaggerConfig=require('./config/swagger.config')
const { mainRoutes } = require('./app.routes')
dotenv.config()



async function main(){

    const app=express()
    app.use(express.json())
    const PORT=process.env.PORT
    app.use(mainRoutes)
    require('./config/mongoose.config')
    swaggerConfig(app)
    app.listen(PORT,()=>{
        console.log(`server: http://localhost:${PORT}`);
    })
}

main()