const hre = require("hardhat");

async function main() {
  // Using the 'hre'- Hardhat runtime environment we find and deploy the contract
  const nftContract = await hre.ethers.deployContract("NFTee");  
  //Wait for the contract to finish deploying
  
  await nftContract.waitForDeployment();
  
  //We print the address of the the deployed contract to our console

  console.log("NFT Contract Address:",await nftContract.getAddress());
  
}

//Call the main function and catch if there is an error

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
