
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class ConfirmationController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('confirmation')
        }



    }

}
    
   
    

module.exports= new ConfirmationController;