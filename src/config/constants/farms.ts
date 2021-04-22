import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  { // ----------------------------------------------------------------------- checked
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'WEED',
    lpAddresses: {
      97: '',
      56: '0x015e835c77C3767B7B16386671001A5008d57fC0',  // checked
    },
    tokenSymbol: 'WEED',
    tokenAddresses: {
      97: '',
      56: '0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf', // checked
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- checked
    pid: 1,
    lpSymbol: 'WEED-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x015e835c77C3767B7B16386671001A5008d57fC0', // checked
    },
    tokenSymbol: 'WEED',
    tokenAddresses: {
      97: '',
      56: '0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf', // checked
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- checked
    pid: 2,
    lpSymbol: 'WEED-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x04820Cb26E4927415Ae8f835716Ef85220d659d5', // checked
    },
    tokenSymbol: 'WEED',
    tokenAddresses: {
      97: '',
      56: '0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf', // checked
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 4,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524', // BTCB token
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422', // ETH token
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB token
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 7, 
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA token
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },


  { 
    pid: 9,
    lpSymbol: 'WEED-ETH',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x6a5692594b8ECdA885d2e10877E7087F7Ad2721A', // WEED-ETH token
    },
    tokenSymbol: 'WEED',
    tokenAddresses: {
      97: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      56: '0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf', 
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },

  { 
    pid: 10,
    lpSymbol: 'WEED-MOON',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x5A5A5D8d4FE52f0fa0a15EC5FfE192b6DaB4e72c', // WEED-MOON token
    },
    tokenSymbol: 'MOON',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf', 
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
]

export default farms
