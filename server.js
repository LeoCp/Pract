var express = require('express')
,bodyParser = require("body-parser")
,yearModel = require("./model/year")
,port = process.env.PORT || 3000
,app = express ();require("./model/config")

//
app.use('/public',  express.static(__dirname + '/public'));
app.use('/static',  express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/years',(req,res) => {
  yearModel.find({}, (err,data) => {
    if (err){
      console.error(err);
    }else{
      res.json(data);
    }
  });
  
});

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
  console.log("Rodando..\nlocalhost:" + port);
});
