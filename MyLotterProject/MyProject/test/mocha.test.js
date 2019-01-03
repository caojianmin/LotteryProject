const assert = require('assert');
class people{
  eat(){
    return 'eat';
  }

  walk(){
    return 'walk';
  }
}
var me;
beforeEach(()=>{
  me = new people();
})
describe('people',()=>{
  it('can eat',()=>{
    //var me = new people();
    assert.equal(me.eat(),'eat');
  })
  it('can walk',()=>{
  //  var me= new people();
    assert.equal(me.walk(),'walk');
  })
});
