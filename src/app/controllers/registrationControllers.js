
const Customer=require('../models/Customer')
const nodemailer = require('nodemailer')
const{mongooseToObject, check}=require('../../util/mongoose')





class RegistrationController{
    
    

  
    index(req,res,next){
        
        res.render('registration')
        



    }
    storeadd(req,res,next)
    {
        Customer.find({})
        .limit()
        .skip()
        .lean()
        .then(datas=>{
            if(check(datas,req.body._username,req.body._email))
            {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var string_length = 6;
                var randomstring = '';
                var message;
                for (var i=0; i<string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum,rnum+1);
                }
                let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'ptudwshop20212022@gmail.com',
                        pass:'Leminhduc0505@'
                    }
                })
        
                let mailOptions={
                    from:'ptudwshop20212022@gmail.com',
                    to:req.body._email,
                    subject:'PTUDWShop',
                    text:'Your password is '+ randomstring
                }
                transporter.sendMail(mailOptions,function(err,data){
                    if(err){
                        console.log('error occurs:',err)
                        message="Email bạn nhập không đúng"
                        res.render('registration',{message})
        
                    }
                    else{
                        console.log('email sent')
                        const formData=req.body
                        formData._address=''
                        formData._password=randomstring
                        formData._avatar='https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp'
                        formData._lock=false
                        const customer=new Customer(formData)
                        customer.save()
                        .then(()=>{
                            message="Đăng ký thành công vui lòng đăng nhập email của bạn để lấy mật khẩu"
                            res.render('registration',{message})
                        })
                        .catch(error=>{

                         })
                        
                    }
                })
               

            }
            else{
                message="Tên tài khoản hoặc email đã đăng ký"
                res.render('registration',{message})
            }
           
            

        })
        

    }

}
    
   
    

module.exports= new RegistrationController;