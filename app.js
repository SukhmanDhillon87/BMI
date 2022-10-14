const express= require("express"); // create const for express
const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var bmiCalculator ="";
app.get("/", function(req,res){
res.render("BMI",{bmiValue:"The BMI is: " + bmiCalculator})
});

app.post("/", (req,res)=>{
var userHeight=Number(req.body.height);
var userWeight= Number(req.body.weight);
bmiCalculator = 10000*(userWeight/(userHeight*userHeight));
res.redirect("/"); // for redirecting on same page
});

app.listen(3000, function(){
    console.log("Running on port number 3000");
});