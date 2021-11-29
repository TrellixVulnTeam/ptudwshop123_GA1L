const productRouter=require('./product')
const singleproductRouter=require('./singleproduct')

const cartRouter=require('./cart')
const checkoutRouter=require('./checkout')
const confirmationRouter=require('./confirmation')
const contactRouter=require('./contact')
const homeRouter=require('./home')
const loginRouter=require('./login')
const trackingRouter=require('./tracking')

function route(app){
    app.use('/product',productRouter )
    app.use('/singleproduct',singleproductRouter)

    app.use('/cart',cartRouter)
    app.use('/checkout',checkoutRouter)
    app.use('/confirmation',confirmationRouter)
    app.use('/contact',contactRouter)
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)
    app.use('/tracking',trackingRouter)
    
      
}

module.exports=route