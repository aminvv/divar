const{default:mongoose}=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


mongoose.connect(process.env.MONGODB_URL).then(()=>[
    console.log( 'connect to mongodb')
]).catch((error)=>{
    console.log('mongodb connection error',error);
})