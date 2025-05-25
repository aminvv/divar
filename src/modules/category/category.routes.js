const{Router}=require('express')
const  CategoryController  = require('./category.controller')
const router=Router()

router.post('/',CategoryController.create)

module.exports={
    CategoryRouter:router
}