import React from 'react';
import { Card, Image, Button, } from "semantic-ui-react";


const RoomCard = ({ room_type, cost, max_occupancy }) => (
//loop through to display
  <Card>
    <Image src="https://picsum.photos/300?random" alt="" />
    <Card.Content>
      <Card.Header>
        {room_type}
      </Card.Header>
      <br/>
    </Card.Content>
    <Card.Content extra>${cost}/PER NIGHT</Card.Content> 
  </Card>

)

export default RoomCard;