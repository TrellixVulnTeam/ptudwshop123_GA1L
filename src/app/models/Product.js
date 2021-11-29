const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  _nameproduct:{type:String},
  _idcate:{type:String},
  _img:{type:String},
  _slug:{type:String},
  _amount:{type:String},
  _price:{type:String},
  _detail:{type:String},
  _v:{type:String},
  _procedure:{type:String}
});

module.exports=mongoose.model('Product',Product)