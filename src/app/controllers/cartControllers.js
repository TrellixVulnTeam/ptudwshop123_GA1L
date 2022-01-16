
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
const session = require('express-session')




class CartController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            var data=[]
            data=req.session.data
            const login=true
            var path
            var message
            if(login)
            {
                path="#"
               
            }
            else{
                path="/login"
            }
            res.render('cart',{data,path,message})
           
            

        }



        
    }
}
    
   
    

module.exports= new CartController;