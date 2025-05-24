const {Router}=require('express')
const {AuthRouter} = require('./modules/auth/auth.routes')
const { UserRouter } = require('./modules/user/user.routes')
const { CategoryRouter } = require('./modules/category/category.routes')
const mainRoutes=Router()

mainRoutes.use('/auth',AuthRouter)
mainRoutes.use('/user',UserRouter)
mainRoutes.use('/category',CategoryRouter)


module.exports={
    mainRoutes
}