
const hre = require("hardhat");

async function main() {
 
  const SkypieaCoin = await hre.ethers.getContractFactory("SkypieaCoin");
  const skypieaCoin = await SkypieaCoin.deploy();

  await skypieaCoin.deployed();

  console.log("SkypieaCoin deployed to:", skypieaCoin.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
