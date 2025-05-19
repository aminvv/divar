const express=require('express')
const dotenv=require('dotenv')
const swaggerConfig=require('./config/swagger.config')
dotenv.config()



async function main(){
    const app=express()
    const PORT=process.env.PORT
    require('./config/mongoose.config')
    swaggerConfig(app)
    app.listen(PORT,()=>{
        console.log(`server: http://localhost:${PORT}`);
    })
}

main()