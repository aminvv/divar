const express=require('express')
const dotenv=require('dotenv')
const swaggerConfig=require('./config/swagger.config')
const { mainRoutes } = require('./app.routes')
const AllExceptionHandler = require('./common/exception/all-exceotion.handler')
const NotFoundHandler = require('./common/exception/not-found.handler')
const cookieParser = require('cookie-parser')
dotenv.config()



async function main(){

    const app=express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
    const PORT=process.env.PORT
    app.use(mainRoutes)
    require('./config/mongoose.config')
    swaggerConfig(app)
    NotFoundHandler(app)
    AllExceptionHandler(app)
    app.listen(PORT,()=>{
        console.log(`server: http://localhost:${PORT}`);
    })
}

main()