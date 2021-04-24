require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = ""; //Add Metamask seed phrase
module.exports = {
  networks: {
    rinkeby : {
      provider: () =>
      new HDWalletProvider({
      mnemonic: {
        phrase: mnemonic
      },
      providerOrUrl: "https://rinkeby.infura.io/v3/" , //Add Infura API key
      numberOfAddresses: 1,
      shareNonce: true,
    }),
      gasPrice : 25000000000,
      network_id : '4'
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
