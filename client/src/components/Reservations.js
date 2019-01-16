import React from "react";
import { SubHeader } from "../styles/AppStyles";
import { Container } from "semantic-ui-react";
import ResForm from "./ResForm";
import axios from "axios";

class Reservation extends React.Component {
  state = { room: "" };

  componentDidMount() {
    axios.get("api/rooms").then(res => {
      this.setState({ room: res.data });
    });
  }

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
