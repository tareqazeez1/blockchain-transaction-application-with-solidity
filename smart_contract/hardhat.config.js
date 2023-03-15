// https://eth-goerli.g.alchemy.com/v2/KWqIJkTXqOZ9rhrgcFAUDEcwhr6Vv3TW

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/KWqIJkTXqOZ9rhrgcFAUDEcwhr6Vv3TW',
            accounts: ['c091287686c74a09757ac69aca05c9a1e202692794764e6fb32c002da23eccec'],
        },
    },
};