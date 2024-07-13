const web3 = require('web3');
const { Web3 } = require('web3');


async function transfer(PRIVATE_KEY, TO) {
  // const { RPC_URL, PRIVATE_KEY, TO } = process.env;
  const { RPC_URL } = { RPC_URL: "http://localhost:8545"};

  const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
  const pubkey = await web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY).address;

  const balance = await web3.eth.getBalance(pubkey);
  const transferAmount = BigInt(web3.utils.toWei(100, 'ether'));
  const currentGas = await web3.eth.getGasPrice();
  const requiredGasPrice = await web3.eth.estimateGas({to: TO});
  const gas = currentGas * requiredGasPrice;

  const nonce = await web3.eth.getTransactionCount(pubkey, 'latest');

  const transaction = {
      'to': TO,
      'value': transferAmount,
      'gas': requiredGasPrice,
      'gasPrice': currentGas,
      'nonce': nonce
  };    
  console.log(transaction)
  const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

  try {
    const hash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    console.log("🎉 The hash of your transaction is: ", hash);
  } catch (error) { 
    console.log("❗ Something went wrong while submitting your transaction: ", error)
  }
}

const main = async ()=> {
  await transfer("--", "--")
}
main();
// postgres://zksync_user:S0What%23v%23ntC%40p!ur%23d@192.168.100.199:9091/zksync_local

// curl http://localhost:8545 -X POST -H "Content-Type: application/json" --data '{"method":"eth_getBalance","params":["0x0df418FC59130e6f34B73008E1d8DEc3Fe3e7ef2", "latest"],"id":1,"jsonrpc":"2.0"}'