import React from "react";
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import { SubHeader, RoomBody, GoldButton, GalleryIconLine } from '../styles/AppStyles';
import { Link, withRouter } from 'react-router-dom';
import Room from "./Room";
import { withNamespaces } from "react-i18next";
import FLEUR_ICON from '../assets/icons/miscellaneous_icons/FLEUR_ICON.png';



class Rooms extends React.Component {
  state = { rooms: [], };

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

  renderCard = () => {
    // const { t } = this.props;
    return  this.state.rooms.map(room => {

        if (room.id === 1 || room.id === 6 || room.id === 11) {
          return (
              <div>
                <Card raised style={{ margin: '30px',}} >
                  <Image size="large" src={room.image} alt="room"/>
                  <Card.Content>
                    <Card.Header style={roomHeader}>
                      {room.room_type}
                    </Card.Header>
                    <Card.Description textAlign="center"> {room.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={cardFooter}>Starting at ${room.cost} / Per Night</Card.Content>
                  <Card.Meta textAlign="center">
                    <Room max={room.max_occupancy} bed={room.bed_type} size={room.size} view={room.view} />
                  </Card.Meta>
                  <Card.Meta textAlign="center">
                    <Link to="/reservations"
                      active={this.props.location.pathname === "/reservations"}
                    >
                      <GoldButton style={{ marginBottom: "10px" }}> Book Now
                    </GoldButton>
                    </Link>
                  </Card.Meta>
                </Card>
              </div>
            )
          } else {
            return null
          }
        })
      
  } //ends renderCard

  render() {
    return (
      <div style={styles.background}>
        <SubHeader> Our Rooms </SubHeader>
        <div style={styles.line}>
            <GalleryIconLine />
          <Image centered 
          style={styles.icon} 
          src={FLEUR_ICON}
          />
            <GalleryIconLine />
          </div>
        <RoomBody> When you host a party or family reunion, the special celebrations let <br />
          you strengthen bonds with each other </RoomBody>

        <Container>
          <Card.Group centered itemsPerRow={3} >
            {this.renderCard()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
    paddingBottom: "100px",
  },
  line:   {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    marginBottom: '-40px',
    marginRight: '640px',
    marginLeft: '640px',
    },
    icon: {
      padding: '7px',
      // display: 'flex',
      // flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '30px'
    }
  }

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '25px',
  paddingTop: '20px',
  textTransform: 'uppercase',
  textAlign: "center",

}

const cardFooter = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '18px',
  color: '#826614',
  textAlign: "center",
  paddingLeft: '10px',
  paddingRight: '10px',

}

export default withNamespaces()(withRouter(Rooms));