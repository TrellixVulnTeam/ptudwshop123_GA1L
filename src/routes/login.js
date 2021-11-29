const express =require('express')
const router=express.Router()
const loginController=require('../app/controllers/loginControllers')



router.get('/',loginController.index)




module.exports=router;