
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class ContactController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('contact')
        }



    }

}
    
   
    

module.exports= new ContactController;