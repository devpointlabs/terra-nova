import React from "react";
import { connect } from "react-redux";
import { Card, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { GoldButton, AmenitiesButton } from "../styles/AppStyles";

class RenderReserved extends React.Component {
  state = { rooms: [], showDesc: false };

  toggleDescription = () => {
    this.setState({ showDesc: !this.state.showDesc });
  };

  showAmenities = r => {
    return (
      <Card.Description>
        <ul>
          <li>{r.max_occupancy}</li>
        </ul>
      </Card.Description>
    );
  };

  findAvailable = () => {
    const { availableRoom } = this.props;
    const { showDesc } = this.state;
    return availableRoom.map(r => (
      <Card raised>
        <Image src="https://picsum.photos/300?random" alt="" />
        <Card.Content>
          <Card.Header style={styles.roomHeader}>{r.room_type}</Card.Header>
        </Card.Content>
        <Card.Content extra style={styles.cardFooter}>
          Starting at ${r.cost} / Per Night
        </Card.Content>
        <Card.Meta textAlign="center">
          <AmenitiesButton onClick={() => this.toggleDescription()}>
            {" "}
            Amenities{" "}
          </AmenitiesButton>
          <hr />
          {showDesc ? this.showAmenities(r) : null}
          <Link to={""}>
            <GoldButton style={{ marginBottom: "10px" }}> Book Now</GoldButton>
          </Link>
        </Card.Meta>
      </Card>
    ));
  };

  render() {
    return (
      <Container>
        <Card.Group centered itemsPerRow={3} style={styles.cards}>
          {this.findAvailable()}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    availableRoom: state.reserved,
    rooms: state.rooms
  };
};

export default connect(mapStateToProps)(RenderReserved);

const styles = {
  roomHeader: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "25px",
    paddingTop: "20px",
    textTransform: "uppercase",
    textAlign: "center"
  },
  cardFooter: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    color: "#826614",
    textAlign: "center"
  },
  cards: {
    marginTop: "20px",
    marginBottom: "10em",
    display: "flex",
    alignItem: "space-between"
  }
};
