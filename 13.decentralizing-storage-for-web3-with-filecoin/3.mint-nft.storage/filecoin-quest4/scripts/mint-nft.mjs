const CONTRACT_ADDRESS = "0xe77781015baf4408616720FFa99E695FAc5f68aB";
const META_DATA_URL = "ipfs://bafyreiccwchmgbjhaobi74xwpz3pkcg3iwfyktk6fv475wfae7wnnrodi4/metadata.json";

// paste function here

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
