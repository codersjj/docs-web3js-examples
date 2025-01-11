import { Web3 } from 'web3'

const YOUR_INFURA_ID = import.meta.env.VITE_INFURA_ID
const web3 = new Web3(`https://mainnet.infura.io/v3/${YOUR_INFURA_ID}`)

// Uniswap token smart contract address (Mainnet)
const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

// you can find the complete ABI on etherscan.io
// https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#code
const abi = [
	{
		name: 'symbol',
		outputs: [{ type: 'string' }],
		type: 'function',
	},
	{
		name: 'totalSupply',
		outputs: [{ type: 'uint256' }],
		type: 'function',
	},
  {
    inputs: [
      { name: "dst", type: "address" },
      { name: "rawAmount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ type: "bool" }],
    type: "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
];

// instantiate the smart contract
const uniswapToken = new web3.eth.Contract(abi, address);
console.log("🚀 ~ uniswapToken:", uniswapToken)

console.log('uniswapToken.methods.symbol()', uniswapToken.methods.symbol())
const symbol = await uniswapToken.methods.symbol().call()
console.log(symbol)

const totalSupply = await uniswapToken.methods.totalSupply().call()
console.log(totalSupply)


// write methods
const toAddress = import.meta.env.VITE_ADDRESS
const to = toAddress
const value = web3.utils.toWei(1, 'ether')
console.log("🚀 ~ value:", value)
const wallet = web3.eth.accounts.wallet.add(import.meta.env.VITE_PRIVATE_KEY)
// console.log('uniswapToken.methods.transfer(to, value)', uniswapToken.methods.transfer(to, value))
// const txReceipt = await uniswapToken.methods.transfer(to, value).send({ from: wallet[0].address })
// console.log('Tx hash:', txReceipt.transactionHash);

// // query past events
// const eventTransfer = await uniswapToken.getPastEvents('Transfer', {
//   // fromBlock: 18850576,
//   fromBlock: 0x11FA314,
//   toBlock: 0x1200F40
// })
// console.log("🚀 ~ eventTransfer:", eventTransfer)

// subscribing to events
const web3_wss = new Web3(`wss://mainnet.infura.io/ws/v3/${YOUR_INFURA_ID}`)
const uniswapToken_wss = new web3_wss.eth.Contract(abi, address)
console.log('uniswapToken_wss.events', uniswapToken_wss.events)
const subscription = uniswapToken_wss.events.Transfer()
console.log("🚀 ~ subscription:", subscription)
subscription.on('data', console.log);
