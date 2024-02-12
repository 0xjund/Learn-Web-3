//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; 

contract Faucet {
    receive() external payable {}
	function withdraw(uint withdraw_amount) public {
		require(withdraw_amount <= 10000000000000000000);

payable(msg.sender).transfer(withdraw_amount);

	}
} 