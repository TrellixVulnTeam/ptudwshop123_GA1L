const express =require('express')
const router=express.Router()
const singleproductController=require('../app/controllers/singleproductControllers')



router.get('/:slug',singleproductController.index)




module.exports=router;