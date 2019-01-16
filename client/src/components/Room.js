import React from 'react';
import { Card, Image,} from "semantic-ui-react";
import { GoldButton } from  '../styles/AppStyles';
import { withNamespaces } from 'react-i18next';



const RoomCard = ({ room_type, cost, max_occupancy, t }) => (
//loop through to display
  <Card>
    <Image src="https://picsum.photos/300?random" alt="" />
    <Card.Content>
      <Card.Header style={roomHeader}>
        
        {t("FAMILY ROOM")}
        {room_type}
      </Card.Header>
      <Image />
      <Card.Description> {t("Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accomodations supurb amenities, genuine hospitality and dedicated service for an elevated experience the Rocky Mountains.")}
      </Card.Description>
      <ul>
        <li>Max 4 Persons {max_occupancy}</li>
        <li>Size 35 m2/ 376 ft</li>
        <li>View: Ocean</li>
        <li>Bed: King-size or Twin Beds</li> 
      </ul>
    </Card.Content>
    <Card.Content extra style={cardFooter}> Starting $260{cost}  /days <GoldButton>View Details</GoldButton></Card.Content> 
    
  </Card>

)


export default withNamespaces()(RoomCard);

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '25px',
  paddingTop: '20px',
}

const cardFooter = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '18px',
}

