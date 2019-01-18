import React from "react";
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import { SubHeader, RoomBody, GoldButton, HeaderLine2 } from '../styles/AppStyles';
import { Link, withRouter } from 'react-router-dom';
import Room from "./Room";
import { withNamespaces } from "react-i18next";



class Rooms extends React.Component {
  state = { rooms: [], };

  //componentDidMount to call and set state to it

  componentDidMount() {
    axios.get("/api/rooms")
      .then(res => {
        this.setState({ rooms: res.data })
      })
  };

  renderCard = () => {
    // const { t } = this.props;
    return  this.state.rooms.map(room => {

        if (room.id === 1 || room.id === 6 || room.id === 11) {
          return (
              <div>
                <Card raised style={{ margin: '30px',}}>
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
        <HeaderLine2 />
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