import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import { SubHeader } from "../styles/AppStyles";
import ResCheckoutForm from "./ResCheckoutForm";

class ResCheckout extends React.Component {
  renderRoomDetails = () => {
    const {
      room: { room_type, cost, description, image },
      userSpecs: { start_date, end_date, adults, children }
    } = this.props.location.state;

    const startDate = start_date.toString();
    const endDate = end_date.toString();

    return (
      <Segment raised style={styles.flex}>
        <Image src="https://picsum.photos/300?random" alt="" />
        <div>
          <Header as="h2">{room_type}</Header>
          <hr />
          <Header as="h4">Description</Header>
          <p>{description}</p>
          <p>Price: ${cost}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Adults: {adults}</p>
          <p>Children: {children}</p>
        </div>
      </Segment>
    );
  };

  render() {
    return (
      <Container>
        <SubHeader>Reservation Checkout</SubHeader>
        <hr />
        <ResCheckoutForm
          userSpecs={this.props.history.location.state.userSpecs}
          room={this.props.history.location.state.room}
        />
        <hr />
        {this.renderRoomDetails()}
      </Container>
    );
  }
}

export default ResCheckout;

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4em"
  }
};
