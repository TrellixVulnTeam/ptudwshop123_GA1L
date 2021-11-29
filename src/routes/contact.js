const express =require('express')
const router=express.Router()
const contactController=require('../app/controllers/contactControllers')



router.get('/',contactController.index)




module.exports=router;