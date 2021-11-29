
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class SingleProductController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next)
        {
            Product.findOne({_slug:req.params.slug})
            
            .then(data=>
                res.render('singleproduct/singleproduct',{data:mongooseToObject (data)})
                

            )
            .catch(next)
        }



        

    }
    
   
    

module.exports= new SingleProductController;