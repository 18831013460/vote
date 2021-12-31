const Vote = artifacts.require("Vote");
const Split =artifacts.require("Split");
module.exports = function (deployer) {

    deployer.deploy(Split);
    deployer.link(Split,Vote);
    deployer.deploy(Vote);
};