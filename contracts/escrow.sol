pragma solidity ^0.4.17;

import "./create.sol";

contract escrow is create{

    event eth_received(address _address, uint amount, string role);
    
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
}
