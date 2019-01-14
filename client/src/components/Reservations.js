import React from "react";
import { SubHeader } from "../styles/AppStyles";
import { Container } from "semantic-ui-react";
import ResForm from "./ResForm";

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <SubHeader>Reservations</SubHeader>
        <Container>
          <ResForm />
        </Container>
      </div>
    );
  }
}

export default Reservation;
