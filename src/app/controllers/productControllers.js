const { error } = require('npmlog')
const Product=require('../models/Product')
var PAGE_SIZE=1


class ProductController{
    
    //[GET]/product


    index(req, res,next){


        
        var page =req.query.page
        var _cate=req.query.cate
        var _nsx=req.query.nsx
        if(page&&_cate=='all'&&_nsx=='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({}).then((total)=>{
                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                    var page_items=[]
                    for(let i=1;i<=tongsoPage;i++)
                    {
                        const item={
                            value:i,
                            isActive:i===page,
                            c:_cate,
                            n:_nsx

                        }
                        page_items.push(item)
                    }
                    res.render('category',{products,tongsoPage,page_items,_cate,_nsx})
                   
                    
                })
            })
            .catch(next)
            

        }
        else if(page&&_cate!='all'&&_nsx=='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({_idcate:_cate})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({_idcate:_cate}).then((total)=>{
                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                    var page_items=[]
                    for(let i=1;i<=tongsoPage;i++)
                    {
                        const item={
                            value:i,
                            isActive:i===page,
                            c:_cate,
                            n:_nsx
                        }
                        page_items.push(item)
                    }
                    res.render('category',{products,tongsoPage,page_items,_cate,_nsx})
                   
                    
                })
            })
            .catch(next)
            

        }
        else if(page&&_cate=='all'&&_nsx!='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({_procedure:_nsx})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({_procedure:_nsx}).then((total)=>{
                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                    var page_items=[]
                    for(let i=1;i<=tongsoPage;i++)
                    {
                        const item={
                            value:i,
                            isActive:i===page,
                            c:_cate,
                            n:_nsx
                        }
                        page_items.push(item)
                    }
                    res.render('category',{products,tongsoPage,page_items,_cate,_nsx})
                   
                    
                })
            })
            .catch(next)
            

        }
        else if(page&&_cate!='all'&&_nsx!='all'){
            page=parseInt(page)
            if(page<1)
                page=1
            
            var skipAmount=(page-1)*PAGE_SIZE
            
            
            Product.find({_procedure:_nsx,_idcate:_cate})
            .skip(skipAmount)
            .limit(PAGE_SIZE)
            .lean()
            .then(products=>{
                
                Product.countDocuments({_procedure:_nsx,_idcate:_cate}).then((total)=>{
                    var tongsoPage=Math.ceil(total/PAGE_SIZE)
                    var page_items=[]
                    for(let i=1;i<=tongsoPage;i++)
                    {
                        const item={
                            value:i,
                            isActive:i===page,
                            c:_cate,
                            n:_nsx
                        }
                        page_items.push(item)
                    }

                    res.render('category',{products,tongsoPage,page_items,_cate,_nsx})
                   
                    
                })
            })
            .catch(next)
            

        }
        else{
            Product.find({})
            .then(products=>res.json(""))
            .catch(next)
        }



        

    }
    //[GET]/product/:slug
   
    
}
module.exports= new ProductController;