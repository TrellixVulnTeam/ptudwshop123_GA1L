
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class HomeController{
    
    

 
    index(req,res,next){
        {
          Product.find({})
          .skip()
          .limit(8)
          .lean()
          .then(product=>{
            Product.find({})
            .skip(8)
            .limit(8)
            .lean()
            .then(products=>{
              res.render('home',{product,products})
            })
          })
          .catch(next)
           
        }



    }

 }
    
   
    

module.exports= new HomeController;