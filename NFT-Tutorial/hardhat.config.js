require("@nomicfoundation/hardhat-toolbox");

// dotenv reads the '.env' file and makes it available to the NodeJS env

require("dotenv").config();

/** @type
import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.QUICKNODE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
