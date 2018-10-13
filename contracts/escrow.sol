pragma solidity ^0.4.17;

import "./Ownable.sol";

contract Pay is Ownable{
    struct Transaction {
        address sender;
        address courier;
        uint transaction_id;
        uint courier_eth;
        uint sender_eth;
        bool sender_paid;
        bool courier_paid;
    }

    event transaction_created(uint transactionId);
    event eth_received(address _address, uint amount, string role);
    Transaction[] public transactions;

    function createTransaction (address sender, address courier, uint transaction_id, uint courier_eth, uint sender_eth) internal onlyOwner{
        uint transactionReference = transactions.push(Transaction(sender, courier, transaction_id, courier_eth, sender_eth, false, false))-1;
        emit transaction_created(transactionReference);
    }

    function holdInEscrow (uint transaction_id, string role) public payable {
        if(keccak256(role) == keccak256("courier") ) {
            if(msg.value == transactions[transaction_id].courier_eth) {
            emit eth_received(msg.sender, msg.value, "courier");
            }
        }
        else {
            if(keccak256(role) == keccak256("sender")) { 
                if(msg.value == transactions[transaction_id].sender_eth){
                emit eth_received(msg.sender, msg.value, "sender");
                }
            }
            else
                throw;
        }
    }


    function release_funds(uint transaction_id) private onlyOwner{
        address courier = transactions[transaction_id].courier;
        uint money = transactions[transaction_id].sender_eth + transactions[transaction_id].courier_eth;
        courier.transfer(money);
    }

    function cancel_transaction(uint transaction_id) private onlyOwner{
        Transaction local_transaction = transactions[transaction_id];
        uint sender_eth = local_transaction.sender_eth;
        uint courier_eth = local_transaction.courier_eth;
        address sender_local = local_transaction.sender;
        address courier_local = local_transaction.courier;

        sender_local.transfer(sender_eth);
        courier_local.transfer(courier_eth);
    }
}
