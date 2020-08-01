# Flight Surety dApp
This project is for the Udacity Blockchain Program, building an insurance dapp on the ethereum blockchain.

## Project Specifications
Truffle v5.1.26 (core: 5.1.26)

Solidity - ^0.6.0 (solc-js)

Node v10.16.3

Web3.js v1.2.1

@openzeppelin/contracts - ^3.1.0

@truffle/hdwallet-provider - ^1.0.40-4
## How to Build the Project
In a dedicated terminal <pre>(terminal 1)</pre>, run the following:

    npm run ganache

In another dedicated terminal <pre>(terminal 2)</pre>, run the following:

    npm run migrate-dev

Following this command in the terminal <pre>(terminal 3)</pre>, run the next command:

    npm run server

In another dedicated terminal <pre>(terminal 3)</pre>, run the following:

    npm run dapp

In total, you will have <b>3</b> running open terminals. One will be dedicated to <i>ganache-cli</i>, the second to running the <i>server</i>, and the third for running the <i>client react app</i>.

## How to Run Smart Contract Tests
In a dedicated terminal <pre>(terminal 1)</pre>, run the following:

    npm run ganache

In another terminal <pre>(terminal 2)</pre>, run the following:

    npm run test

## Troubleshooting
If you are encountering trouble, check to make sure your build is removed, and the config files have been removed before re-trying the build steps. 

A helper script is available to you to accomplish this, by running the below in a terminal.

    npm run clean
