// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract VolunteerNFT is ERC721URIStorage {  
  using Counters for Counters.Counter;
  Counters.Counter public nftIds;

  mapping(uint => VolunteerData) public volunteerDataList;

  struct VolunteerData {
    uint id;
    uint hour;
    string charity;
    address recipient;
  }

  event VolunteerRecorded (
    uint id,
    uint hour,
    string charity,
    address recipient
  );

  constructor() ERC721("Volunteer To Earn", "VTE") {}

  function mintVolunteerNFT(uint _hours, string memory _charity, address _recipient) public payable returns (uint) {
    nftIds.increment();
    uint256 newNFTId = nftIds.current();

    _mint(_recipient, newNFTId);
    //_setTokenURI(newNFTId, url);

    volunteerDataList[newNFTId] = VolunteerData(newNFTId, _hours, _charity, _recipient);
    emit VolunteerRecorded(newNFTId, _hours, _charity, _recipient);

    return newNFTId;
  }
}