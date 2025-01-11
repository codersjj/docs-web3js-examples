import { Web3 } from 'web3'

const YOUR_INFURA_ID = import.meta.env.VITE_INFURA_ID
const privateKey = import.meta.env.VITE_PRIVATE_KEY
const address = import.meta.env.VITE_ADDRESS

const web3 = new Web3(`https://mainnet.infura.io/v3/${YOUR_INFURA_ID}`)

// let wallet = web3.eth.accounts.wallet.create(2)
// console.log('wallet', wallet)
// const signature = wallet.at(0).sign("Test Data"); // use wallet
// console.log("🚀 ~ signature:", signature)

// add an account to a wallet
const wallet = web3.eth.accounts.wallet.add(privateKey)
// console.log("🚀 ~ wallet:", wallet)
console.log(wallet[0].address)
// console.log(wallet[0].privateKey)

// transfer eth
// create transaction object
const tx = {
  from: wallet[0].address,
  to: '0xa3286628134bad128faeef82f44e99aa64085c94',
  value: web3.utils.toWei('1', 'ether')
}

// send the transaction
const txReceipt = await web3.eth.sendTransaction(tx)
console.log('txReceipt', txReceipt)

// // add an account to a wallet
// const account = web3.eth.accounts.wallet.add(
// 	'0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec',
// );

// // create transaction object to send 1 eth to '0xa32...c94' address from the account[0]
// const tx = {
// 	from: account[0].address,
// 	to: '0xa3286628134bad128faeef82f44e99aa64085c94',
// 	value: web3.utils.toWei('1', 'ether'),
// };
// // the "from" address must match the one previously added with wallet.add

// // send the transaction
// const txReceipt = await web3.eth.sendTransaction(tx);

// console.log('Tx hash:', txReceipt.transactionHash);
// // ↳ Tx hash: 0x03c844b069646e08af1b6f31519a36e3e08452b198ef9f6ce0f0ccafd5e3ae0e
