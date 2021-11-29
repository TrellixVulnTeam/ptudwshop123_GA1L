
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class HomeController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('index')
        }



    }

 }
    
   
    

module.exports= new HomeController;