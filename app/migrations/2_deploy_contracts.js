var escrow = artifacts.require("./escrow.sol");
var create = artifacts.require("./create.sol");
var Ownable = artifacts.require("./Ownable.sol");
var transfer = artifacts.require("./transfer.sol");
var test = artifacts.require("./test.sol");

module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.link(Ownable, create);
    deployer.deploy(create);
    deployer.link(create, transfer);
    deployer.deploy(transfer);
    deployer.link(create, escrow);
    deployer.deploy(escrow);
    deployer.deploy(test);
}