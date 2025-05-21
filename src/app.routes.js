const {Router}=require('express')
const {AuthRouter} = require('./modules/auth/auth.routes')
const mainRoutes=Router()

mainRoutes.use('/auth',AuthRouter)


module.exports={
    mainRoutes
}