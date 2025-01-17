const { Web3 } = require('web3')
require('dotenv').config()

async function main() {
  const web3 = new Web3('http://127.0.0.1:8545')

  const privateKey = process.env.PRIVATE_KEY

  const sender = web3.eth.accounts.wallet.add(privateKey)[0]
  const receiver = web3.eth.accounts.create()

  const initialSenderBalance = await web3.eth.getBalance(sender.address)
  console.log('Initial sender balance:', initialSenderBalance)
  const initialReceiverBalance = await web3.eth.getBalance(receiver.address)
  console.log('Initial receiver balance:', initialReceiverBalance)

  const receipt = await web3.eth.sendTransaction({
    from: sender.address,
    to: receiver.address,
    value: 50
  })
  console.log("🚀 ~ main ~ receipt:", receipt)

  console.log("Final sender Balance:", await web3.eth.getBalance(sender.address))
  console.log("Final receiver Balance:", await web3.eth.getBalance(receiver.address))
}

main()