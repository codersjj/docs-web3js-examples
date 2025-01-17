const { Web3 } = require('web3')
require('dotenv').config()

async function main() {
  const web3 = new Web3('http://127.0.0.1:8545')

  const privateKey = process.env.PRIVATE_KEY
  const sender = web3.eth.accounts.privateKeyToAccount(privateKey)
  const receiver = web3.eth.accounts.create()

  const block = await web3.eth.getBlock()

  const transaction = {
    from: sender.address,
    to: receiver.address,
    value: 100,
    maxFeePerGas: block.baseFeePerGas * 2n,
    maxPriorityFeePerGas: 100000
  }

  const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey)

  const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
  console.log('receipt:', receipt)
}

main()
