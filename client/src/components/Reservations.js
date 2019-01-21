import React from "react";
import { SubHeader } from "../styles/AppStyles";
import { Container } from "semantic-ui-react";
import ResForm from "./ResForm";
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";
import RenderReserved from "./RenderReserved";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRooms());
  }

  render() {
    return (
      <div>
        <SubHeader>Reservations</SubHeader>
        <ResForm />
        <RenderReserved />
      </div>
    );
  }
}

export default connect()(Reservation);
