import React from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
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
      <div>
        <Card>
          <Image src="https://picsum.photos/300?random" alt="" />
          <Card.Content>
            <Card.Header style={roomHeader}>{r.room_type}</Card.Header>
          </Card.Content>
          <Card.Content extra style={cardFooter}>
            Starting at ${r.cost} / Per Night
          </Card.Content>
          <Card.Meta textAlign="center">
            <AmenitiesButton onClick={() => this.toggleDescription()}>
              {" "}
              Amenities{" "}
            </AmenitiesButton>
            <hr />
            {showDesc ? this.showAmenities(r) : null}
            <Link to="/room">
              <GoldButton style={{ marginBottom: "10px" }}>
                {" "}
                Book Now
              </GoldButton>
            </Link>
          </Card.Meta>
        </Card>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={3}>{this.findAvailable()}</Card.Group>
      </div>
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

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "25px",
  paddingTop: "20px",
  textTransform: "uppercase",
  textAlign: "center"
};
const cardFooter = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "18px",
  color: "#826614",
  textAlign: "center"
};
