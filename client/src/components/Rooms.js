import React from "react";
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import { withNamespaces } from 'react-i18next';
import { SubHeader, RoomBody, GoldButton, AmenitiesButton } from '../styles/AppStyles';
import { Link, withRouter } from 'react-router-dom';

// import RoomCard from './Room';

class Rooms extends React.Component {
  state = { rooms: [], showDesc: false };

  //componentDidMount to call and set state to it
  
  componentDidMount() {
    axios.get("/api/rooms")
    .then(res => {
      this.setState({ rooms: res.data })
    })
  };
  
  //logic to loop through and grab room ids
  //only display 1st 6th 11th
  
  
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
      
      
    //   render() {
    //     const { rooms, } = this.state;
    //     const { t } = this.props;
        
    // return (
    //   <div style={styles.background}>
    //     <SubHeader >{t("Our Rooms")}</SubHeader>
    //     <RoomBody> {t("When you host a party or family reunion, the special celebrations let you strengthen bonds with each other")} </RoomBody>

    //     <Container>
    //     <Card.Group centered itemsPerRow={3} >
    //       {rooms.map(room => {
    //         if (room.id === 1 || room.id === 6 || room.id === 11) {
    //           return (
    //             <Card>
    //               <Image src="https://picsum.photos/300?random" alt="" />
    //               <Card.Content>
    //                 <Card.Header style={roomHeader}>
    //                   {t(room.room_type)}
    //                 </Card.Header>
    //               </Card.Content>
    //               <Card.Content extra style={cardFooter}>{t("Starting at")} ${room.cost}{t("/ Per Night")}</Card.Content>
    //             </Card>

    //           )
    //         }
    //       }
    //     }

  toggleDescription = () => {
    this.setState({ showDesc: !this.state.showDesc })
  }

  // we need these in the database to pull in??
  // help me Alex
  showAmenities = (r) => {
    return (
      <Card.Description>
        <ul>
          <li>{r.max_occupancy}</li>
        </ul>
      </Card.Description>
    )
  };

  render() {
    const { rooms, showDesc } = this.state;

    return (
      <div style={styles.background}>
        <SubHeader> Our Rooms </SubHeader>

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
                      <AmenitiesButton onClick={() => this.toggleDescription()}> Amenities </AmenitiesButton>
                      <hr /> 
                        { showDesc ? this.showAmenities(room) :null}
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
    paddingBottom: "50px",

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

export default withNamespaces()(withRouter(Rooms));


