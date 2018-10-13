pragma solidity ^0.4.17;

import "./create.sol";

contract transfer is create{
    function release_funds(uint transaction_id) internal onlyOwner{
        address courier = transactions[transaction_id].courier;
        uint money = transactions[transaction_id].sender_eth + transactions[transaction_id].courier_eth;
        courier.transfer(money);
    }

    function cancel_transaction(uint transaction_id) internal onlyOwner{
        Transaction local_transaction = transactions[transaction_id];
        uint sender_eth = local_transaction.sender_eth;
        uint courier_eth = local_transaction.courier_eth;
        address sender_local = local_transaction.sender;
        address courier_local = local_transaction.courier;

        sender_local.transfer(sender_eth);
        courier_local.transfer(courier_eth);
    }
}