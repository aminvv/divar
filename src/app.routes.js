const {Router}=require('express')
const {AuthRouter} = require('./modules/auth/auth.routes')
const { UserRouter } = require('./modules/user/user.routes')
const { CategoryRouter } = require('./modules/category/category.routes')
const { OptionRouters } = require('./modules/option/option.route')
const mainRoutes=Router()

mainRoutes.use('/auth',AuthRouter)
mainRoutes.use('/user',UserRouter)
mainRoutes.use('/category',CategoryRouter)
mainRoutes.use('/option',OptionRouters)


module.exports={
    mainRoutes
}