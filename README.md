# Crator Economy
Now-a-Days, we use Centralised social media platform, which have the authority to control your actions like delete or block account without any prior notice. Centralized social media networks do have their downsides like a single point of failure can be a risk factor for organizations. If the central—or master—server goes down, the individual “client” machines attached to it are unable to process user requests. On traditional social media, creators are not able to monetise their work very efficiently. 

To solve above problems we created Crator Economy decentralised platform for sharing your digital work and thoughts. And also provide feature for viewers to support their favourite art piece by tipping in cryptocurrency. 


## Tech Stack Used
- Solidity
- web3react
- Metamask
- ether
- Truffle Suite
- Ganache
- web3.storage
- ReactJS
- react-bootstrap


## Running locally Crator Economy Dapp

### Pre-Requisites

- Truffle Suite
- Ganache CLI

```
$ npm install -g truffle
$ npm install -g ganache-cli
```  
Clone the project


### Connect with your Ethereum Wallet

request for testnet Ether according to your Test network https://faucet.egorfine.com/ 


### Setting up a local Blockchain
Install dependencies

```
$ npm install
```

Compile Smart Contracts

```
$ truffle compile
```

Run ganache

```
$ ganache-cli
```  

Deploy the smart contracts on the Test Network, for mine it is ropsten

```
$ truffle deploy --network ropsten
```  

### Setting up the client

Start the App

```
$ npm start
```

Visit https://localhost:3000/ to view the app

