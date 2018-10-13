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

    creator.setProvider(self.web3.currentProvider);
    
    var cre;
    create.deployed().then(function(instance) {
      cre = instance;
      return cre.createTransaction(sender, courier, transaction_id, courier_eth, sender_eth);
    }).then(function() {
      console.log(answer);
    }).catch(function(e) {
      console.log(e);
    });
  }
}