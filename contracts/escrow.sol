pragma solidity ^0.4.17;

import "./Ownable.sol"

contract Pay is Ownable{
    struct Transaction {
        address sender;
        address courier;
        uint transaction_id;
        bool sender_paid=false, courier_paid=false;
    }

    event transaction_created(uint transactionId);
    event eth_received(address _address, uint amount, string role);
    Transaction[] public transactions;

    function createTransaction (address sender, address courier. uint transaction_id) internal onlyOwner{
        Transaction _transaction = (sender, courier, transaction_id, false);
        int transactionReference = transactions.push(_transaction)-1;
        emit transaction_created(transactionReference);
    }

    function holdInEscrow (uint transaction_id, string role) public payable {
        if(keccak256(role) == "7fc3771f539a03c47afbbf258702c19273ef5e735e24ee7978081dc07288c687" && msg.value == transactions[transaction_id].courier_eth) { //check if courier
            emit eth_received(msg.sender, msg.value, "courier");
        }
        else {
            if(keccak256(role) == "168e92ce035ba45e59a0314b0ed9a9e619b284aed8f6e5ab0a596efd5c9f5cf9" && msg.value == transactions[transaction_id].sender_eth) { //check if sender
                emit eth_received(msg.sender, msg.value, "sender");
            }
            else
                throw;
        }
    }


    function release_funds(uint transaction_id) private onlyOwner{
        address courier = transactions[transaction_id];
        uint money = transactions[transaction_id].sender_eth + transactions[transaction_id].courier_eth;
        courier.transfer(money);
    }

    function cancel_transaction(uint transaction_id) private onlyOwner{
        Transaction local_transaction = transactions[transaction_id];
        uint sender_eth = local_transaction.sender_eth;
        uint courier_eth = local.transaction.courier_eth;
        address sender_local = local_transaction.sender;
        address courier_local = local_transaction.courier;

        sender.transfer(sender_eth);
        courier.transfer(courier_eth);
    }
