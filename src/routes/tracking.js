const express =require('express')
const router=express.Router()
const trackingController=require('../app/controllers/trackingControllers')



router.get('/',trackingController.index)




module.exports=router;