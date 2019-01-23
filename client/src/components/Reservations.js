import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";
import RenderAvailable from "./RenderAvailable";
import { Container } from "semantic-ui-react";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRooms());
  }

  render() {
    return (
      <Container>
        <SubHeader>Reservations</SubHeader>
        <hr />
        <ResForm />
        <RenderAvailable history={this.props.history} />
      </Container>
    );
  }
}

export default connect()(Reservation);
