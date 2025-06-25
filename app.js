const express = require('express');
const app = express();
const PORT= 5001;
const mongoose = require('mongoose');
const path = require('path');
const Todo = require("./models/todo.js");
const methodOverride = require('method-override');



app.set("views", path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));



main().then((res)=>{
  console.log('Server Connected to Mongo Db');
}).catch((err)=> console.log(err));

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/Todo');
}

app.listen(PORT,(req,res)=>{
  console.log(`Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
  res.render('welcome.ejs');
});

app.get('/todos',async (req,res)=>{
  const todos = await Todo.find({});
  res.render('index.ejs',{todos})
})