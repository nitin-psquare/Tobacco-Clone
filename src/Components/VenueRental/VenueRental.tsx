<<<<<<< Updated upstream
import React from 'react'
import MIddle from './Middle/MIddle'
=======
import Curtain from "../../common/curtain";
import Upper from "./upper/upper";
>>>>>>> Stashed changes

const VenueRental = () => {
  return (
    <div>
<<<<<<< Updated upstream
        <div className="venue-rental-upper">
            hey 
        </div>
        <div className="venue-rental-middle">
            
          <MIddle/>



        </div>
        <div className="venue-rental-lower">

        </div>




=======
      <Curtain />
      <div className="venue-rental-upper">
        <Upper />
      </div>
      <div className="venue-rental-middle"></div>
      <div className="venue-rental-lower"></div>
>>>>>>> Stashed changes
    </div>
  );
};

export default VenueRental;
