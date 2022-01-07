
const Product=require('../models/Product')
const Comment=require('../models/Comment')
const{mongooseToObject, relatedProduct}=require('../../util/mongoose')
var PAGE_SIZE=2



class SingleProductController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next)
        {
            
            Product.findOne({_slug:req.params.slug})
            
            
            
            .then((data) =>{
                
                Product.find({_idcate:data._idcate})
                    .skip()
                    .limit(8)
                    
                    .lean()
                    .then(products=>{
                        Product.find({_idcate:data._idcate})
                        .skip(8)
                        .limit(8)
                        .lean()
                        .then(productss=>{

                            var page =req.query.page
                            page=parseInt(page)
                            if(page<1)
                                page=1
            
                            var skipAmount=(page-1)*PAGE_SIZE
            
            
                             Comment.find({_idproduct:data._id})
                            .skip(skipAmount)
                            .limit(PAGE_SIZE)
                            .lean()
                            .then(comments=>{
                                Comment.countDocuments({_idproduct:data._id})
                                .then((total)=>{
                                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                                    var page_items=[]
                                    for(let i=1;i<=tongsoPage;i++)
                                    {
                                        const item={
                                            value:i,
                                            isActive:i===page,
                                            

                                         }
                                        page_items.push(item)
                                    }
                                    res.render('singleproduct/singleproduct',{comments,tongsoPage,page_items,productss:relatedProduct(productss,data._nameproduct),products:relatedProduct(products,data._nameproduct),data:mongooseToObject (data)})
                   
                    
                                })
                            })
                            .catch(next)
                            
                        })
                            
                            
                        
                
                
                    
                   
                
                
                })
                    
           
                

            })
            .catch(next)
           


            

        }
        store(req,res,next)
        {
            const formData=req.body
            formData._idproduct=req.params.slug
            const comment=new Comment(formData)
            comment.save()
            .then(()=>res.redirect('/singleproduct/'+req.params.slug))
            .catch(error=>{

            })
            



        }
        add(req,res,next)
        {
            Product.findOne({_slug:req.params.slug})
            .then(data=>{
                data=mongooseToObject(data)
                if(!req.session.data)
                {
                    var temp=[];
                    temp.push(data)
                    req.session.data=temp
                }
                else{
                    var temp=[]
                    temp=req.session.data
                    temp.push(data)
                    req.session.data=temp
                }
               

                
                
                res.json(req.session.data)

            })
        }
       



        

    }


    
   
    

module.exports= new SingleProductController;
