const fs = require('fs');
const Web3 = require('web3');

function FWC() {
  this.json = JSON.parse(fs.readFileSync('./src/contracts/FWC.json', 'utf8'));
  this.contractName = this.json['contractName'];
  this.address = this.json['networks']['3']['address'];
  this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_API));
  this.events = {
    WAGER: 'Wager',
    WAGER_ACCEPTED: 'WagerAccepted',
    SHAME: 'Shame',
  };
}

FWC.prototype.toString = function() {
  return {
    contractName: this.contractName,
    address: this.address
  }
};

module.exports = FWC;
