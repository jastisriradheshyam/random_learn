import { Web3 } from "web3";

const web3 = new Web3();

const [ wallet ] = web3.wallet.create(1);
console.log(wallet);