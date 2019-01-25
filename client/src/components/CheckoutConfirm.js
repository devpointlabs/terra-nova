import React from "react";
import { Container, Segment } from "semantic-ui-react";

class CheckoutConfirm extends React.Component {
  render() {
    const { room, userSpecs } = this.props.location.state;
    const startDate = userSpecs.start_date.toString();
    const endDate = userSpecs.end_date.toString();

    return (
      <Container>
        <Segment>
          <h1>Your reservation has been booked!</h1>
          <hr />
          <h3>Rerservation Details</h3>
          <p>Reserved By: {userSpecs.first_name} </p>
          <p>Email: {userSpecs.email}</p>
          <p>Room: {room.room_type}</p>
          <p>Check-In: {startDate}</p>
          <p>Check-Out: {endDate}</p>
          <p>Adults: {userSpecs.adults}</p>
          <p>Children: {userSpecs.children}</p>
        </Segment>
      </Container>
    );
  }
}
export default CheckoutConfirm;
