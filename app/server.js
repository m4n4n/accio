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

// app.get('/getAccounts', (req, res) => {
//   console.log("**** GET /getAccounts ****");
//   truffle_connect.start(function (answer) {
//     res.send(answer);
//   })
// });

app.post('/newTransaction', (req, res) => {
  console.log("**** New Transaction ****");
  console.log(req.body);
  let  sender = req.body.sender, 
         courier = req.body.courier, 
         transaction_id = req.body.transaction_id, 
         courier_eth = req.body.courier_eth, 
         sender_eth = req.body.sender_eth; 

  truffle_connect.initTransaction(sender, courier, transaction_id, courier_eth, sender_eth, (answer) => {
    res.send(answer);
  });
});

app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)

  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

  console.log("Express Listening at http://localhost:" + port);

});
