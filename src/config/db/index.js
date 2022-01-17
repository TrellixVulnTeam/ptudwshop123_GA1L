const mongoose=require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://1:1@cluster0.qfjnm.mongodb.net/PTUDWShop?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('success')
    }catch(error){
        console.log('fail')
    }

}
module.exports={connect}
