const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');
const { mnemonic, infuraKey, initialAirline, initialFlight, getInitialFlightTime } = require('../constants');

module.exports = function(deployer) {

    deployer.deploy(FlightSuretyData, initialAirline, initialFlight, getInitialFlightTime())
    .then(() => {
        return deployer.deploy(FlightSuretyApp, FlightSuretyData.address)
                .then(async () => {
                    let config = {
                        localhost: {
                            url: 'http://localhost:8545',
                            FlightSuretyData: {
                                address: FlightSuretyData.address,
                                abi: FlightSuretyData.abi
                            },
                            FlightSuretyApp: {
                                address: FlightSuretyApp.address,
                                abi: FlightSuretyData.abi
                            }
                        }
                    };
                    const provider = new HDWalletProvider(mnemonic, infuraKey);
                    const web3 = new Web3(provider);
                    const { abi, address } = config.localhost.FlightSuretyData;
                    const dataContractinstance = new web3.eth.Contract(abi, address);
                    const { address: appAddress } = config.localhost.FlightSuretyApp; 
                    dataContractinstance.methods.wireApp(appAddress).call()
                        .then(() => {
                            console.log('<--WIRED APP-->');
                        }).catch(error => {
                            console.log({error});
                            console.log('!--FAILED TO WIRE APP--!');
                        });
                });
    });
}
