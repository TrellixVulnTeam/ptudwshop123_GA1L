
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class TrackingController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('tracking')
        }



    }

}
    
   
    

module.exports= new TrackingController;