const { expect } = require("chai");

describe("Simple Message Contract", function () {
//   it("Deployment should assign the total supply of tokens to the owner", async function () {
//     const [owner] = await ethers.getSigners();

//     const hardhatToken = await ethers.deployContract("Token");

//     const ownerBalance = await hardhatToken.balanceOf(owner.address);
//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//   });
  it("Deployment with an empty string should assign a default message to the message var", async function () {
    const defaultMessage = "Hey there AD";

    const SimpleMessage = await ethers.getContractFactory("SimpleMessage");
    const SimpleMessageContract = await SimpleMessage.deploy("");

    const logMessage = await SimpleMessageContract.getMessage();

    console.log("logMessage - test1", logMessage);

    expect(await SimpleMessageContract.getMessage()).to.equal(defaultMessage);
  });

  it("Deployment with a string set in the constructor should assign that string to the message var", async function () {
    const defaultMessage = "Hey there AD";
    const customMessage = "Meme coins are not cool";

    const SimpleMessage = await ethers.getContractFactory("SimpleMessage");
    const SimpleMessageContract = await SimpleMessage.deploy(customMessage);

    const logMessage = await SimpleMessageContract.getMessage();

    console.log("logMessage - test2", logMessage);

    expect(await SimpleMessageContract.getMessage()).to.not.equal(defaultMessage);
  });

});