import { Web3, FMT_NUMBER, FMT_BYTES } from 'web3'

const web3 = new Web3('https://eth.llamarpc.com')

// web3.eth.getBlock().then(block => {
//   console.log(`default ~ Block #${block.number} Hash: ${block.hash}`)
// })

// web3.eth.getBlock(undefined, false, {
//   number: FMT_NUMBER.HEX,
//   bytes: FMT_BYTES.HEX
// }).then(block => {
//   console.log(`number-HEX, bytes-HEX ~ Block #${block.number} Hash: ${block.hash}`)
// })
// web3.eth.getBlock(undefined, false, {
//   number: FMT_NUMBER.BIGINT,
//   bytes: FMT_BYTES.HEX
// }).then(block => {
//   console.log(`number-BIGINT, bytes-HEX ~ Block #${block.number} Hash: ${block.hash}`)
// })
// web3.eth.getBlock(undefined, false, {
//   number: FMT_NUMBER.NUMBER,
//   bytes: FMT_BYTES.HEX
// }).then(block => {
//   console.log(`number-NUMBER, bytes-HEX ~ Block #${block.number} Hash: ${block.hash}`)
// })
// web3.eth.getBlock(undefined, false, {
//   number: FMT_NUMBER.STR,
//   bytes: FMT_BYTES.HEX
// }).then(block => {
//   console.log(`number-STR, bytes-HEX ~ Block #${block.number} Hash: ${block.hash}`)
// })
// web3.eth.getBlock(undefined, false, {
//   number: FMT_NUMBER.BIGINT,
//   bytes: FMT_BYTES.UINT8ARRAY
// }).then(block => {
//   console.log(`number-BIGINT, bytes-UINT8ARRAY ~ Block #${block.number} Hash: ${block.hash}`)
// })

// const blockNumber1 = await web3.eth.getBlockNumber()
// console.log(`Block #${blockNumber1}`);

// const blockNumber2 = await web3.eth.getBlockNumber({
//   number: FMT_NUMBER.HEX,
//   bytes: FMT_BYTES.HEX
// })
// console.log(`Block #${blockNumber2}`);

// web3.eth.defaultReturnFormat = {
//   number: FMT_NUMBER.HEX,
//   bytes: FMT_BYTES.UINT8ARRAY
// }

// const block = await web3.eth.getBlock()
// console.log(`Block #${block.number} Hash: ${block.hash}`)

web3.eth
  .getBlock(undefined, undefined, {
    bytes: FMT_BYTES.HEX,
    number: FMT_NUMBER.BIGINT
  })
  .then(block => {
    console.log(`bytes-HEX, number-BIGINT ~ Block hash: ${block.hash}`)
  })

web3.eth
  .getBlock(undefined, undefined, {
    bytes: FMT_BYTES.UINT8ARRAY,
    number: FMT_NUMBER.BIGINT
  })
  .then(block => {
    console.log(block.hash)
    console.log(`bytes-UINT8ARRAY, number-BIGINT ~ Block hash: [${block.hash}]`)
  })

web3.eth
  .getBlockNumber({
    bytes: FMT_BYTES.HEX,
    number: FMT_NUMBER.BIGINT
  })
  .then(blockNumber => {
    console.log(`bytes-HEX, number-BIGINT ~ Block #${blockNumber}`)
  })

web3.eth
  .getBlockNumber({
    bytes: FMT_BYTES.HEX,
    number: FMT_NUMBER.HEX
  })
  .then(blockNumber => {
    console.log(`bytes-HEX, number-HEX ~ Block #${blockNumber}`)
  })

web3.eth
  .getBlockNumber({
    bytes: FMT_BYTES.HEX,
    number: FMT_NUMBER.NUMBER
  })
  .then(blockNumber => {
    console.log(`bytes-HEX, number-NUMBER ~ Block #${blockNumber}`)
  })

web3.eth
  .getBlockNumber({
    bytes: FMT_BYTES.HEX,
    number: FMT_NUMBER.STR
  })
  .then(blockNumber => {
    console.log(`bytes-HEX, number-STR ~ Block #${blockNumber}`)
  })