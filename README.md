# TxID Network Finder

TxID Network Finder is a personal project being developed to facilitate finding the relevant network of a given txID.

## Project Philosophy

In my previous role as a transaction auditor, I had to review cryptocurrency deposits from different blockchain networks. Users would submit a form with details like transaction ID (txID), coin type, and network, but often, the network info provided was incorrect. This meant we couldn't find the transaction on the specified network.

Sometimes, with certain txIDs, we could make educated guesses about the network. But for txIDs starting with '0x' (which were the majority), finding the correct network required manually searching across multiple networks. This process took about 3-5 minutes for each incorrect network entry. Dealing with over 80 transactions a day, this inefficiency added up, taking almost an hour daily to find the right network.

To improve this, I am developing the TxID Network Finder. It compiles major networks associated with '0x' hashes. You paste the txID and select the network you want to search, making the process much quicker. The page will also help identify if a deposit address belongs to a certain network, streamlining the workflow significantly.

## Usage

1.  Paste the 0x txID you wish to find out which network the transaction belongs to.

2.  Click on the desired network to search given txIDand open it on a new window.

The page also return a nav bar with the current price of certains cryptocurrencies.

## Author

[Leticia Azevedo](www.letiazevedo.com)
