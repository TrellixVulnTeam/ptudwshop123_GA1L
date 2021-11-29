const express =require('express')
const router=express.Router()
const checkoutController=require('../app/controllers/checkoutControllers')



router.get('/',checkoutController.index)




module.exports=router;