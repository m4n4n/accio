const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/releaseFunds', (req, res) => {
  let transaction_id = req.query.transaction_id;
  truffle_connect.releaseFunds(transaction_id, (answer) => {
    res.send(answer);
  });
});
app.get('/canceltransaction', (req, res) => {
  let transaction_id = req.query.transaction_id;
  truffle_connect.cancelTransaction(transaction_id, (answer) => {
    res.send(answer);
  });
});

app.get('/payTransaction', (req, res) => {
  let  role = req.query.role, 
         transaction_id = req.query.transaction_id;
  truffle_connect.payTransaction(role, transaction_id, (answer) => {
    res.send(answer);
  });
});

app.get('/newTransaction', (req, res) => {
  let  sender = req.query.sender, 
         courier = req.query.courier, 
         courier_eth = req.query.courier_eth, 
         sender_eth = req.query.sender_eth; 

  truffle_connect.initTransaction(sender, courier, courier_eth, sender_eth, (answer) => {
    res.send(answer);
  });
});

app.get('/newTransaction', (req, res) => {
  let  sender = req.query.sender, 
         courier = req.query.courier, 
         courier_eth = req.query.courier_eth, 
         sender_eth = req.query.sender_eth; 

  truffle_connect.initTransaction(sender, courier, courier_eth, sender_eth, (answer) => {
    res.send(answer);
  });
});

app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)

  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

  console.log("Express Listening at http://localhost:" + port);

});
