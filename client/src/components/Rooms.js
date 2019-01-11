import React from "react";
import { Header, Card } from 'semantic-ui-react';
import { RoomHeader, RoomBody } from '../styles/AppStyles';
import RoomCard from './Room';
import axios from 'axios';

class Rooms extends React.Component {
   state = { rooms: {} };

//componentDidMount to call and set state to it

// componentDidMount() {
//   axios.get(`api/rooms`)
//     .then(res => {
//       this.setState({ rooms: res.data })
//     })
// }


//render rooms function to map through rooms
//check this...


// renderRooms = () => {
//   return this.state.rooms.map(r => (
//     <RoomCard key={r.id} {...r}/>
//     ))
//   };

  
  render() {
    return (
      <div>
        <RoomHeader> Our Rooms </RoomHeader>
          <RoomBody> When you host a party or family reunion, the special celebrations let </RoomBody>
          <RoomBody> you strengthen bonds with each other </RoomBody>
        

       <Card.Group itemsPerRow={3} >
        <RoomCard/>
       </Card.Group>
   
      </div>
    )
  }
}

export default Rooms;