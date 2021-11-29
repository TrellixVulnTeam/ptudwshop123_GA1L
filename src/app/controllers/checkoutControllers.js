
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class CheckOutController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('checkout')
        }



    }

    }
    
   
    

module.exports= new CheckOutController;