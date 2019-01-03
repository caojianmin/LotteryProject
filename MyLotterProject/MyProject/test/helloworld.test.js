const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const {bytecode,interface} = require('../compile');
const assert = require('assert');
var helloworld;
var fetchAccounts;
beforeEach(async()=>{
  fetchAccounts = await web3.eth.getAccounts();
  helloworld = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:['cjm']}).send({from:fetchAccounts[0],gas:'1000000'});
  //console.log(fetchAccounts);
});
describe('HelloWorld',()=>{
  it('deploy contract',()=>{
    //console.log(helloworld);
    assert.ok(helloworld.options.address);
  });
  it('call static function',async()=>{
    //call函数只能在静态方法中调用
    const message = await helloworld.methods.getName().call();
    assert.equal('cjm',message);
  })
  it('call dynamic function',async()=>{
    await helloworld.methods.changeName('caojianmin').send({from:fetchAccounts[0],gas:'1000000'});
    const message = await helloworld.methods.getName().call();
    assert.equal('caojianmin',message);
  })
})
