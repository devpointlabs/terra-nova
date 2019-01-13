import React from "react";
import { Card } from 'semantic-ui-react';
import { SubHeader, RoomBody, } from '../styles/AppStyles';
import RoomCard from './Room';
import axios from 'axios';

class Rooms extends React.Component {
   state = { rooms: {} };

//componentDidMount to call and set state to it

componentDidMount() {
  axios.get(`api/rooms`)
    .then(res => {
      this.setState({ rooms: res.data })
    })
}


//render rooms function to map through rooms
//check this...


renderRooms = () => {
  return this.state.rooms.map(r => (
    <RoomCard key={r.id} {...r}/>
    ))
  };

  
  render() {
    return (
      <div style={styles.background}>
        <SubHeader> Our Rooms </SubHeader>
        <hr style={headerLine}/>
          <RoomBody> When you host a party or family reunion, the special celebrations let 
           you strengthen bonds with each other </RoomBody>
        

       <Card.Group centered itemsPerRow={3} >
        <RoomCard/>
       </Card.Group>
   
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


const headerLine = {
  borderTop: '.5px',
  width: '20%',
  float: 'center',
  borderColor: '#bf9b30',
}

export default Rooms;