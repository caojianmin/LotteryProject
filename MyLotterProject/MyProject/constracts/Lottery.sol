pragma solidity ^0.4.23;

contract Lottery{
  address public manager;//荷官
  address[] public players;//玩家
  constructor()public{
    manager= msg.sender;
  }
  //玩家入场
  function enetr() public payable{
    require(msg.value>0.01 ether);
    players.push(msg.sender);
  }
//随机数
function random() private view returns(uint){
  return uint(keccak256(block.difficulty,now,players));
}
modifier restricted{
    require(msg.sender==manager);
    _;
}

  //判断输赢
  function pickwiner() public{
    uint index = random() % players.length;
    players[index].transfer(address(this).balance);
    players = new address[](0);
  }

  function getPlayers() public returns(address[]){
    return players;
  }
}
