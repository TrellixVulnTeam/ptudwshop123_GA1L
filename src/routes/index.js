const productRouter=require('./product')
const singleproductRouter=require('./singleproduct')

const cartRouter=require('./cart')
const checkoutRouter=require('./checkout')
const confirmationRouter=require('./confirmation')
const contactRouter=require('./contact')
const homeRouter=require('./home')
const loginRouter=require('./login')
const searchRouter=require('./search')
const registrationRouter=require('./registration')

function route(app){
    app.use('/product',productRouter )
    app.use('/singleproduct',singleproductRouter)

    app.use('/cart',cartRouter)
    app.use('/checkout',checkoutRouter)
    app.use('/confirmation',confirmationRouter)
    app.use('/contact',contactRouter)
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)
    app.use('/search',searchRouter)
    app.use('/registration',registrationRouter)
    
      
}

module.exports=route