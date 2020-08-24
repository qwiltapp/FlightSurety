// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

interface FlightSuretyDataInterface {
    // Contract Owner Functions
    function disableContract(address _address) external;
    function enableContract(address _address) external;

    // Utilities
    function getInsuredStatus(string calldata _airline) external returns (bool airlineIsFunded);

    // Airline Functions
    function applyAirline(address _address, string calldata _name) external;
    function voteAirline(address _address, address _voter, string calldata _name) external;
    function fundAirline(address _funder, address _airline) external payable;
    function addFlight(string calldata _flight, address _caller, address _airline, uint256 timeOfFlightInSeconds) external;
    function getAirlineByName(string calldata _airline) external view returns(address _address);

    // Passenger Functions
    function buyInsurance(address _passenger, string calldata _airline, string calldata _flight) external payable;
    function claimInsurance(address payable _passenger, string calldata _airline, string calldata _flight) external;

    // Oracle Functions
    function setFlightDelayed(string calldata _airline, string calldata _flight, uint8 _statusCode) external;
}
