var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var budgetSeed = [
  {
    name: "Paycheck",
    value: 2500,
    date: new Date(Date.now())
  },
  {
    name: "Hobby Lobby",
    value: 60,
    date: new Date(Date.now())
  },
  {
    name: "Groceries",
    value: 120,
    date: new Date(Date.now())
  }
  
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
