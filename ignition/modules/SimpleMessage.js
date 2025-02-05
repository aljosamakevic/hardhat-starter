const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SimpleMessageModule = buildModule("SimpleMessageModule", (m) => {
    const initMessage = m.getParameter("initialMessage", "Hey, this is a custom message");
  const simpleMessage = m.contract("SimpleMessage", [initMessage]);

  return { simpleMessage };
});

module.exports = SimpleMessageModule;

// npx hardhat ignition deploy ./ignition/modules/SimpleMessage.js --network <network-name>
// npx hardhat ignition deploy ./ignition/modules/SimpleMessage.js --network sepolia

