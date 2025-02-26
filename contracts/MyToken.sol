// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        // 给部署者铸造 1000 个代币
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}