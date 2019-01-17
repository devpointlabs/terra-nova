import React from "react";
import { SubHeader } from "../styles/AppStyles";
import { Container } from "semantic-ui-react";
import ResForm from "./ResForm";
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";

class Reservation extends React.Component {
  state = { room: "" };

  componentDidMount() {
    this.props.dispatch(getRooms());
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

export default connect()(Reservation);
