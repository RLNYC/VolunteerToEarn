// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC20Token.sol";

contract VolunteerNFT is ERC721URIStorage {  
  ERC20Token private doGoodToken;

  using Counters for Counters.Counter;
  Counters.Counter public nftIds;

  mapping(uint => VolunteerData) public volunteerDataList;

  struct VolunteerData {
    uint id;
    uint hour;
    string charity;
    bool isRedeemed;
    address recipient;
  }

  event VolunteerRecorded (
    uint id,
    uint hour,
    string charity,
    address recipient
  );

  constructor(ERC20Token _doGoodToken) ERC721("Volunteer To Earn", "VTE") {
     doGoodToken = _doGoodToken;
  }

  function mintVolunteerNFT(uint _hours, string memory _charity, address _recipient) public payable returns (uint) {
    nftIds.increment();
    uint256 newNFTId = nftIds.current();

    _mint(_recipient, newNFTId);
    //_setTokenURI(newNFTId, url);

    volunteerDataList[newNFTId] = VolunteerData(newNFTId, _hours, _charity, false, _recipient);
    emit VolunteerRecorded(newNFTId, _hours, _charity, _recipient);

    return newNFTId;
  }

  function redeemVolunteerNFT(uint _id) public payable {
    VolunteerData memory _volunteerNFT = volunteerDataList[_id];
    require(_volunteerNFT.recipient == msg.sender, "You do not own this NFT");
    require(_volunteerNFT.isRedeemed == false, "You already redeemed this NFT");

    doGoodToken.mint(msg.sender, _volunteerNFT.hour * 1e18);

    _volunteerNFT.isRedeemed = true;
    volunteerDataList[_id] = _volunteerNFT;
  }
}