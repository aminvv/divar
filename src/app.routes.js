const {Router}=require('express')
const {AuthRouter} = require('./modules/auth/auth.routes')
const { UserRouter } = require('./modules/user/user.routes')
const mainRoutes=Router()

mainRoutes.use('/auth',AuthRouter)
mainRoutes.use('/user',UserRouter)


module.exports={
    mainRoutes
}