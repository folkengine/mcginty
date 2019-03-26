'use strict';

const fs = require('fs');

function FWC() {
  this.json = JSON.parse(fs.readFileSync('./src/contracts/FWC.json', 'utf8'));
  this.contractName = this.json['contractName'];
  this.address = this.json['networks']['3']['address'];
}

FWC.prototype.toString = function() {
  return {
    contractName: this.contractName,
    address: this.address,
  }
};

module.exports = FWC;
