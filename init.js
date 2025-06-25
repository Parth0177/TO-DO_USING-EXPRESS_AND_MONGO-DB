const mongoose = require('mongoose');
const Todo = require('./models/todo');

main().then(()=>{
  console.log('connection Successful');
  
}).catch((err)=> console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Todo");
};

let allTodo= [
  {
    name: "Buy Groceries",
    description: "Milk, Bread, Eggs"
  },
  {
    name: "Complete Assignment",
    description: "Finish the math assignment by Friday"
  },
  {
    name: "Call Mom",
    description: "Check in on her health and plans for the weekend"
  }
]

Todo.insertMany(allTodo);