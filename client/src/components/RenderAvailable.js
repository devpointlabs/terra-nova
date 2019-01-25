import React from "react";
import { connect } from "react-redux";
import { Card, Image, Container } from "semantic-ui-react";
import Room from "./Room";
import ResModal from "./ResModal";

class RenderAvailable extends React.Component {
  state = { showModal: false };

  findAvailable = () => {
    const { availableRoom } = this.props;
    return availableRoom.map(r => (
      <div>
        <Card raised style={{ margin: "20px" }}>
          <Image src={r.image} alt="" />
          <Card.Content>
            <Card.Header style={styles.roomHeader}>{r.room_type}</Card.Header>
          </Card.Content>
          <Card.Description textAlign="center">
            {r.description}
          </Card.Description>
          <Card.Content extra style={styles.cardFooter}>
            ${r.cost} / Per Night
          </Card.Content>
          <Card.Meta textAlign="center">
            <Room
              max={r.max_occupancy}
              bed={r.bed_type}
              size={r.size}
              view={r.view}
            />
            <ResModal
              room={r}
              history={this.props.history}
              userSpecs={this.props.userSpecs}
            />
          </Card.Meta>
        </Card>
      </div>
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
    userSpecs: state.reservation
  };
};

export default connect(mapStateToProps)(RenderAvailable);

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
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
};
