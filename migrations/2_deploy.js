const VolunteerNFT = artifacts.require("VolunteerNFT");

module.exports = function (deployer) {
  deployer.deploy(VolunteerNFT);
};
