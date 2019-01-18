import React from "react";
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import { SubHeader, RoomBody, GoldButton, AmenitiesButton, HeaderLine2 } from '../styles/AppStyles';
import { Link, withRouter } from 'react-router-dom';

// import RoomCard from './Room';

class Rooms extends React.Component {
  state = { rooms: [], showDesc: false, roomId: null };

  //componentDidMount to call and set state to it

  componentDidMount() {
    axios.get("/api/rooms")
      .then(res => {
        this.setState({ rooms: res.data })
      })
  };

  toggleDescription = (id) => {
    this.setState({ showDesc: !this.state.showDesc })
    this.setState({roomId: id})
  }

  // we need these in the database to pull in??
  // help me Alex
  showAmenities = (r) => {
    return (
      <Card.Description>
        <ul>
          <ul>Max {r.max_occupancy} Persons </ul>
          <ul>Size 35 m2/ 376 ft</ul>
          <ul>View: Ocean</ul>
          <ul>Bed: King-size or Twin Beds</ul>
        </ul>
      </Card.Description>
    )
  };

  render() {
    const { rooms, showDesc } = this.state;

    return (
      <div style={styles.background}>
        <SubHeader> Our Rooms </SubHeader>
        <HeaderLine2/>
        <RoomBody> When you host a party or family reunion, the special celebrations let <br />
          you strengthen bonds with each other </RoomBody>

        <Container>
          <Card.Group centered itemsPerRow={3} >
            {rooms.map(room => {
              if (room.id === 1 || room.id === 6 || room.id === 11) {
                return (
                  <Card>
                    <Image src="https://picsum.photos/300?random" alt="" />
                    <Card.Content>
                      <Card.Header style={roomHeader}>
                        {room.room_type}
                      </Card.Header>
                    </Card.Content>
                    <Card.Content extra style={cardFooter}>Starting at ${room.cost} / Per Night</Card.Content>
                    <Card.Meta textAlign="center">
                      <AmenitiesButton onClick={() => this.toggleDescription(room.id)}> Amenities </AmenitiesButton>
                      <hr /> 
                        { showDesc && room.id === this.state.roomId ? this.showAmenities(room) :null}
                      <Link to="/room"
                        active={this.props.location.pathname === "/room"}
                      >
                        <GoldButton style={{ marginBottom: "10px" }}> Book Now
                    </GoldButton>
                      </Link>
                    </Card.Meta>
                  </Card>

                )
              }
            }

            )}
          </Card.Group>
        </Container>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
    paddingBottom: "150px",

  }
}

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '25px',
  paddingTop: '20px',
  textTransform: 'uppercase',
  textAlign: "center",
}


// const headerLine = {
//   borderTop: '.5px solid black',
//   width: '20%',
//   float: 'center',
//   borderColor: '#826614',
// }

const cardFooter = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '18px',
  color: '#826614',
  textAlign: "center",

}



export default withRouter(Rooms);