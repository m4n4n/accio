pragma solidity ^0.4.17;

contract test{
   uint a;
   uint b;

   function createTransaction(address sender, address courier, uint transaction_id, uint courier_eth, uint sender_eth) returns (uint){
   	return courier_eth+sender_eth;
   }
   }