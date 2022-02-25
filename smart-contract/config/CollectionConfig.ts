import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Genzlrz',
  tokenName: 'DGZNLR',
  tokenSymbol: 'DGNZLR',
  hiddenMetadataUri: 'ipfs://QmYpe3k1TK9b4gRzAwN75mykoM1L5myPYDbw6Jcn32Zsf2/_metadata.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xf07ADB109897dD83eA80DdF81F2A69E63cEFAaf5",
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
