const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {bytecode,interface} = require('./compile');
const provider = new HDWalletProvider(
  'payment primary much sauce avoid razor camera riot wave task shallow paddle',
  'https://ropsten.infura.io/v3/abf106df064d47299d4f0a42574dc4db'
);
const web3 = new Web3(provider);
const deploy = async ()=>{
  console.log(interface);
  const accounts =await web3.eth.getAccounts();
  //console.log('Attemp to deploy contract',accounts[0]);
  //const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:'0x'+bytecode,arguments:['cjm']})
  //  .send({from:accounts[0],gas:'1000000'});
  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:'0x'+bytecode})
    .send({from:accounts[0],gas:'1000000'});
  console.log('contract deployed to',result.options.address);
}
deploy();
