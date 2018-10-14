const contract = require('truffle-contract');

const create_artifact = require('../build/contracts/create.json');
const escrow_artifact = require('../build/contracts/escrow.json');
const transfer_artifact = require('../build/contracts/transfer.json');

var creator = contract(create_artifact);
var escrow = contract(escrow_artifact);
var transfer = contract(transfer_artifact);

module.exports = {
  start: function(callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    creator.setProvider(self.web3.currentProvider);
    escrow.setProvider(self.web3.currentProvider);
    transfer.setProvider(self.web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    self.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[2];

      callback(self.accounts);
    });
  },

  initTransaction: function(sender, courier, transaction_id, courier_eth, sender_eth) {
    var self = this;
    console.log(self.web3.currentProvider);
    creator.setProvider(self.web3.currentProvider);
    self.web3.eth.defaultAccount = self.web3.eth.accounts[0];
    
    var cre;
    creator.deployed().then(function(instance) {
      cre = instance;
      console.log(sender);
      console.log(courier);
      // let requester=self.web3.sendTransaction.request(argsObject);
      // let gasEstimate = self.web3.eth.estimateGas(requester);

      // let pok = cre.createTransaction.estimateGas(sender, courier, transaction_id, courier_eth, sender_eth, {from: self.web3.eth.defaultAccount});
        // pok.then(res => {
        //   console.log(res);
        // });
        return cre.createTransaction(sender, courier, transaction_id, courier_eth, sender_eth, {from: self.web3.eth.defaultAccount});
  });
}
}