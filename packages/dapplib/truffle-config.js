require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note snow common include ensure obscure gentle'; 
let testAccounts = [
"0x73ea92b1aba8594ef56ac341c838322330d96e527787775ccd79f3de253cddca",
"0x5ad7533fcf269d26e816a9b84d2911daf885a27ce497a502eeb2b7ee8bd03246",
"0x9b88d000a94a6ae370038a9ed9bf21470ebc02b19dbf1c305e4f622d2c08b261",
"0x3a77ddb3de95476ff957eb66a69ca957f9b174751af4e8a5e8a8b70b3b252bba",
"0x210f663e59eab3bc0ac841dcf178e3a107a0bb4bfef035cd136b2f406c0d326b",
"0xe77ce529fb702ed706d2b48fb12c1d0ffa27ca8f66c3ca2f7ee7d2d29a961e8f",
"0xa18b6b988d93bdf2d93fef59a980ab72706d126ba74d3cf96d1ece0f9b452395",
"0xad0e0f9d85d795f7cd9545e9fe179954d69c02e6c2e721a30306f2037bfc5662",
"0x95dba811c87a8158456c1e21dcae0e434b138f991f948f4f4ed86979a57ca878",
"0x1121898eda109791b97c5a94dcc639952b36755287f1d15a2a9a460a9102be97"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
