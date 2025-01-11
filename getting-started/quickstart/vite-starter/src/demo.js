import { Web3, FMT_BYTES } from 'web3'

const INFURA_ID = import.meta.env.VITE_INFURA_ID
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_ID')
const web3 = new Web3('https://mainnet.infura.io/v3/' + INFURA_ID)
// const web3 = new Web3('https://eth.llamarpc.com')

// web3.eth.getBlockNumber().then(console.log)

// const balance = await web3.eth.getBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')
// console.log('balance:', balance)

// web3.eth.getChainId().then(console.log)

// const transactionCount = await web3.eth.getTransactionCount('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')
// const transactionCount = await web3.eth.getTransactionCount('0x37826D8B5F4B175517A0f42c886f8Fca38C55Fe7')
// const transactionCount = await web3.eth.getTransactionCount('0x37826D8B5F4B175517A0f42c886f8Fca38C55Fe7', undefined, { bytes: FMT_BYTES.UINT8ARRAY })
// console.log('transactionCount:', transactionCount)

const gasPrice = await web3.eth.getGasPrice()
console.log("🚀 ~ gasPrice:", gasPrice)
