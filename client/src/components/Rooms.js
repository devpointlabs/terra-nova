import React from "react";
import { Header, Card } from 'semantic-ui-react';
import { RoomHeader, RoomBody } from '../styles/AppStyles'

class Rooms extends React.Component {
   state = { rooms: [] }


  render() {
    return (
      <div>
        <RoomHeader> Our Rooms </RoomHeader>
        <RoomBody> When you host a party or family reunion, the special celebrations let </RoomBody>
        <RoomBody> you strengthen bonds with each other </RoomBody>
        {/* link to room */}

       {/* card group here */}
   
      </div>
    )
  }
}

export default Rooms;