<<<<<<< HEAD
import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";
=======
import React from 'react';
import { SubHeader } from '../styles/AppStyles';
>>>>>>> 0a36c62198c366792e2b1ea2bc944b0f4de52e39

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <SubHeader>Reservations</SubHeader>
        <ResForm />
      </div>
    );
  }
}

export default Reservation;
