#!/usr/bin/env node

require('dotenv').config();
const program = require('commander');

const FWC = require('./src/fwc');

program
  .version(process.env.VERSION).usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .parse(process.argv);

const fwc = new FWC();

if (program.integer) {
  console.log('yes');
} else {
  console.log(fwc.toString());
}
