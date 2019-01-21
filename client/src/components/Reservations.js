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
        <Container style={styles.flex}>
          <ResForm />
          <RenderReserved />
        </Container>
      </div>
    );
  }
}

export default connect()(Reservation);

const styles = {
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start"
  }
};
