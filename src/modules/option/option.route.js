const{Router}=require("express")
const optionController = require("./option.controller")
const router=Router()

router.post('/',optionController.create)
router.put('/:id',optionController.update)
router.get('/',optionController.find)
router.get('/by-category-slug/:slug',optionController.findByCategorySlug)
router.get('/by-category/:CategoryId',optionController.findByCategoryId)
router.get('/:id',optionController.findById)
router.delete('/:id',optionController.removeById)

module.exports={
    OptionRouters:router
}