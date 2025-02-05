
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config = {
  solidity: "0.8.28",
  networks: {
    "stavanger": {
      url: "https://rpc.stavanger.gateway.fm",
      chainId: 50591822,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    },
    "sepolia": {
      url: "https://sepolia.infura.io/v3/2N9POOyrFRVSKiIB0fdnTNxKU7k",
      chainId: 11155111,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    },
  }
};

export default config;
