import { Web3, HttpProvider } from 'web3'

const infuraApiKey = import.meta.env.VITE_INFURA_API_KEY
const provider = 'https://mainnet.infura.io/v3/' + infuraApiKey

const web3 = new Web3(provider)

const blockNumber = await web3.eth.getBlockNumber()
console.log('blockNumber:', blockNumber)

// or

const web3_2 = new Web3(new HttpProvider(provider))
const blockNumber2 = await web3_2.eth.getBlockNumber()
console.log('blockNumber2:', blockNumber2)

// configuring HTTP providers
const httpProviderOptions = {
  providerOptions: {
		body: undefined,
		cache: 'force-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		integrity: undefined,
		keepalive: true,
		method: 'GET',
		// mode: 'same-origin',
		redirect: 'error',
		referrer: undefined,
		referrerPolicy: 'same-origin',
		signal: undefined,
		window: undefined,
  }
}

const web3_3 = new Web3(new HttpProvider('https://eth.llamarpc.com', httpProviderOptions))

const blockNumber3 = await web3_3.eth.getBlockNumber()
console.log('blockNumber3:', blockNumber3)
