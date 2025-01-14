import { Web3, WebSocketProvider } from 'web3'

const infuraApiKey = import.meta.env.VITE_INFURA_API_KEY
// const provider = 'wss://mainnet.infura.io/ws/v3/' + infuraApiKey
// const web3 = new Web3(provider)

// const blockNumber = await web3.eth.getBlockNumber()
// console.log('blockNumber:', blockNumber)

// // or

// const web3_2 = new Web3(new WebSocketProvider(provider))
// const blockNumber2 = await web3_2.eth.getBlockNumber()
// console.log('blockNumber2:', blockNumber2)


// const timeoutID = setTimeout(() => {
//   web3_2.currentProvider?.disconnect()
//   console.log('provider is disconnected')
// }, 3000);

// addEventListener('visibilitychange', () => {
//   console.log('clear Timeout')
//   clearTimeout(timeoutID)
// })

// configuring websocket providers
// const provider = new WebSocketProvider(
//   'wss://mainnet.infura.io/ws/v3/' + infuraApiKey,
//   {
//     headers: {
//       'x-api-key': '<API key>'
//     }
//   },
//   {
//     autoReconnect: true,
//     delay: 500,
//     maxAttempts: 10
//   }
// )

// OR include only ReconnectOptions
const provider = new WebSocketProvider(
  'wss://mainnet.infura.io/ws/v3/' + infuraApiKey,
  {},
  {
    autoReconnect: true,
    delay: 500,
    maxAttempts: 5
  }
)