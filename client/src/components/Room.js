import React from 'react';
import { Card, Image,} from "semantic-ui-react";
import { GoldButton } from  '../styles/AppStyles';


const RoomCard = ({ room_type, cost, max_occupancy }) => (
//loop through to display
  <Card>
    <Image src="https://picsum.photos/300?random" alt="" />
    <Card.Content>
      <Card.Header>
        FAMILY ROOM
      </Card.Header>
      <Image />
      <Card.Description> Located in the heart of Aspen with a unique blend of contemporary
        luxury and historic heritage, deluxe accomodations supurb amenities, genuine hospitality
        and dedicated service for an elevated experience the Rocky Mountains.
      </Card.Description>
      <ul>
        <li>Max 4 Persons</li>
        <li>Size 35 m2/ 376 ft</li>
        <li>View: Ocean</li>
        <li>Bed: King-size or Twin Beds</li> 
      </ul>
    </Card.Content>
    <Card.Content extra> Starting ${cost}/days <GoldButton>View Details</GoldButton></Card.Content> 
    
  </Card>

)


export default RoomCard;

