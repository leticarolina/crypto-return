# Blockchain Finder

TxID Network Finder is a personal project developed to both facilitate finding the relevant network of a given txID/address while also serving as a tool for applying my skills in React.js.

### Link

- Live Site URL: [https://www.blockchainfinder.site/](https://blockchainfinder.site/)

### Built with

- HTML5
- Bootstrap
- React.js

## Project Philosophy

In my previous role as a transaction auditor, my responsibilities included reviewing cryptocurrency deposits originating from different blockchain networks. Users would submit a form with details like transaction ID (txID), coin type, and network, but often, the network info provided was incorrect. This meant we couldn't find the transaction on the specified network.

Sometimes, with certain txIDs, we could make guesses about the network. But for txIDs starting with '0x' (which were the majority), finding the correct network requires searching across multiple networks that support '0x'.

To address this issue, I developed a unique application which is a network finder. When dealing with a transaction ID (txID) starting with 0x and you're unsure which network it belongs to, my page has compiled information on some of the most widely used networks to make this search much smoother.
Additionally, there's a second page to check if a deposit address is supported by a specific blockchain explorer.

The page features a desktop navigation bar displaying the current prices of different cryptocurrencies. I used the CoinCap API to get these values.

## Usage

Simply paste the txID or address, click on your preferred network, and a new browser window will open with all the details.

Step by step:

1.  Paste the 0x txID or address you want to identify the network for.
2.  Click on the desired network to search for the given txID or address, and the browser will open the result in a new window.

## Author

[Leticia Azevedo](www.letiazevedo.com)
