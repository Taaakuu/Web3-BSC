import Web3 from "web3";

const web3 = new Web3("https://bsc-dataseed.binance.org/");

async function getBNBBalance() {
    const address = "0x5428f3D57E8700f252326d821Bd1fBC5b47ABB14"; // 替换成你的 Metamask 地址
    let balance = await web3.eth.getBalance(address);
    console.log("你的 BNB 余额:", web3.utils.fromWei(balance, "ether"));
}

getBNBBalance();
