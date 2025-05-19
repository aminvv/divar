const express=require('express')
const dotenv=require('dotenv')
dotenv.config()



async function main(){
    const app=express()
    const PORT=process.env.PORT
    require('./config/mongoose.config')

    app.listen(PORT,()=>{
        console.log(`server: http://localhost:${PORT}`);
    })
}

main()