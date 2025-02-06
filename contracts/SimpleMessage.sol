//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract SimpleMessage {
    string public message;
    address public owner;

    event MessageChanged(string indexed newMessage, address indexed changedBy);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(string memory initialMessage) {
        owner = msg.sender;

        if (bytes(initialMessage).length == 0) {
            message = "Hey there AD";
        } else {
            message = initialMessage;
        }
    }

    function setMessage(string memory _message) public onlyOwner {
        message = _message;
        emit MessageChanged(_message, msg.sender);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        owner = newOwner;
    }
}
