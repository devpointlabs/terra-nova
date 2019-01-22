import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";
import RenderAvailable from "./RenderAvailable";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRooms());
  }

  render() {
    return (
      <div>
        <SubHeader>Reservations</SubHeader>
        <ResForm />
        <RenderAvailable history={this.props.history} />
      </div>
    );
  }
}

export default connect()(Reservation);
