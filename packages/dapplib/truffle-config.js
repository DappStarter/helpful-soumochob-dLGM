require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soap upgrade hope kitchen sure test'; 
let testAccounts = [
"0xd59c8bc5dedb80afcda1c220deec214d6f7ec7e1a7cdf2d39888b63a90a352a0",
"0x436df4eda1851951eb9a4f822ead070316a8cacbbc125c0429427d9e2ef521d7",
"0x586b63cbf4d9f9fc588eee47e9b96f1f04ec8e072e977e6a04e37f43166f41ec",
"0xcee791c2713d8ce56d205143dc0e5117d72abe14ef9a8f0f3f87817c206b61dc",
"0xc5cd07a34fc103fcb75afe483b56cfbc5607ea895d20f752c10b964f09af6673",
"0x072e9eacd5a828b50d75765bb6004dd099981296ddfe4e56a0a7ef1aed904094",
"0x33cb8cd3669286909a4c700a7d95e47e0996f83cc5931f5fbd4cef865c5085ed",
"0x8a19af037a6cf5949b347e7580456ab96ed3410cc85fba68018876066aec4f1e",
"0x4555ca342fc1c8aec77cc535429f0525b9324b974fc1636d833621c223d25eb6",
"0xdbea3ec0ed0975260077a57473a5160429c0c515d7611bd4432d831f0fb191c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

