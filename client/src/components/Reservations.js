import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";

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
