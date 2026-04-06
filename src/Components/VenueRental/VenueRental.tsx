import React from 'react'
import MIddle from './Middle/MIddle'
import Curtain from "../../common/curtain";
import Upper from "./upper/upper";

const VenueRental = () => {
  return (
    <div>
      <Curtain />
      <div className="venue-rental-upper">
        <Upper />
      </div>
      <div className="venue-rental-middle">
        <MIddle />
      </div>
      <div className="venue-rental-lower"></div>
    </div>
  );
};

export default VenueRental;
