
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class LoginController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('login')
        }



    }

}
    
   
    

module.exports= new LoginController;