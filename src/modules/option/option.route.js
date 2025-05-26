const{Router}=require("express")
const optionController = require("./option.controller")
const router=Router()

router.post('/',optionController.create)
router.get('/',optionController.find)
router.get('/:id',optionController.findById)
router.get('/by-category/:CategoryId',optionController.findByCategoryId)

module.exports={
    OptionRouters:router
}