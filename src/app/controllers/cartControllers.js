
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class CartController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('cart')
        }



        
    }
}
    
   
    

module.exports= new CartController;