import React from "react";
import { Card, Image, Container } from 'semantic-ui-react';
import axios from 'axios';
import { SubHeader, RoomBody, } from '../styles/AppStyles';
// import RoomCard from './Room';

class Rooms extends React.Component {
  state = { rooms: [] };

  //componentDidMount to call and set state to it

  componentDidMount() {
    axios.get("/api/rooms")
      .then(res => {
        this.setState({ rooms: res.data })
      })
  };


  //render rooms function to map through rooms
  //check this...


  // renderRooms = () => {
  //   return this.state.rooms.map(r => (
  //     <Card>
  //       <Image src="https://picsum.photos/300?random" alt="" />
  //         <Card.Content>
  //           <Card.Header style={roomHeader}>
  //            {room_type}
  //           </Card.Header>
  //         </Card.Content>
  //         <Card.Content extra style={cardFooter}>Starting {cost} / Per Night</Card.Content>
  //     </Card>
  //     ))
  //   };


  render() {
    const { rooms } = this.state;

    return (
      <Container style={styles.background}>
        <SubHeader> Our Rooms </SubHeader>
        <hr style={headerLine} />
        <RoomBody> When you host a party or family reunion, the special celebrations let <br />
          you strengthen bonds with each other </RoomBody>

          
        <Card.Group centered itemsPerRow={3} >
          {rooms.map(rooms =>
            <Card>
              <Image src="https://picsum.photos/300?random" alt="" />
              <Card.Content>
                <Card.Header style={roomHeader}>
                  {rooms.room_type}
                </Card.Header>
              </Card.Content>
              <Card.Content extra style={cardFooter}>Starting {rooms.cost} / Per Night</Card.Content>
            </Card>
          )}
        </Card.Group>
      </Container>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
    paddingBottom: "50px",
  }
}

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '25px',
  paddingTop: '20px',
}


const headerLine = {
  borderTop: '.5px solid black',
  width: '20%',
  float: 'center',
  borderColor: '#826614',
}

const cardFooter = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '18px',
  color: '#826614',
}

export default Rooms;