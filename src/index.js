const express = require('express')
const path=require('path')
const morgan=require('morgan')
const app = express()
var port=process.env.PORT ||3000
const exphbs = require('express-handlebars')
const hbs = exphbs.create( { extname: '.hbs'})
const db=require('./config/db')

db.connect();

const route=require('./routes')

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine )
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources','views'))


app.use(morgan('combined'))


app.use(express.static(path.join(__dirname, 'public')))



route(app)



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})