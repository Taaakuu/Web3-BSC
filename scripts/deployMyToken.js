import hre from "hardhat";

async function main() {
    // 获取 MyToken 合约工厂
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    // 部署合约（如果合约构造函数有参数，在 deploy() 中传入参数）
    const myToken = await MyToken.deploy();
    // 等待合约部署完成
    await myToken.waitForDeployment();

    const address = await myToken.getAddress();
    console.log("MyToken deployed to:", myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;

});