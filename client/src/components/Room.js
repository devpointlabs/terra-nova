import React from 'react';
import { Card, Icon, Segment } from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';
import exterior1 from "../assets/images/exterior1.jpg";
import interior from "../assets/images/interior.jpg";
import { SubHeader } from '../styles/AppStyles';



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
        <li>{t("Max 4 Persons")} {max_occupancy}</li>
        <li>Size 35 m2/ 376 ft</li>
        <li>View: Ocean</li>
        <li>Bed: King-size or Twin Beds</li> 
      </ul>
    </Card.Content>
    <Card.Content extra style={cardFooter}> {t("Starting $260")}{cost}  {t("/days")} <GoldButton>{t("View Details")}</GoldButton></Card.Content> 
  </Card>

)
  // //loop through to display
  // <div>
  //   <SubHeader>Family Room</SubHeader>
  //     <Card.Group centered itemsPerRow={3}>
  //     <Card>
  //       <Image src={exterior1} />
  //       </Card>
  //     <Card>
  //       <Image src={interior} />
  //     </Card>
  //     </Card.Group>
  //   <Card>
  //     <Card.Content>
  //       <Card.Header style={roomHeader}>
  //         {t("FAMILY ROOM")}
  //         {room_type}
  //       </Card.Header>
  //       <Image />
  //       <Card.Description> {t("Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accomodations supurb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.")}
  //       </Card.Description>
  //       <ul>
  //         <li>Max 4 Persons {max_occupancy}</li>
  //         <li>Size 35 m2/ 376 ft</li>
  //         <li>View: Ocean</li>
  //         <li>Bed: King-size or Twin Beds</li>
  //       </ul>
  //     </Card.Content>
  //     <Card.Content extra style={cardFooter}> Starting $260{cost}  /days <GoldButton>View Details</GoldButton></Card.Content>
  //   </Card>
  // </div>


export default withNamespaces()(RoomCard);

const roomHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '25px',
  paddingTop: '20px',
}





class Room extends React.Component {
  state = { toggle: false }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  showAmenities = () => {
    const { max, size, view, bed } = this.props
    return (
      <Card.Description textAlign="center">
        <Segment basic centered textAlign="center" style={styles.amenitiesFont}>
           <p> Accommodates {max} People </p>
            <p>Size: {size} </p>
            <p>View: {view} </p>
            <p>Bed: {bed}</p>
          
        </Segment>
      </Card.Description>
    )
  };

  render() {
    if (this.state.toggle === false) {
      return (
        <div style={styles.amenitiesDiv}>
          Room Details
            <Icon style={{ cursor: 'pointer' }} size="large" name="angle down" onClick={() => this.toggle()}></Icon>
          {this.state.toggle ? this.showAmenities() : null}
        </div>
      )
    } else {
      return (
        <div>
          <Icon style={{ cursor: 'pointer' }} size="large" name="angle up" onClick={() => this.toggle()}></Icon>
          {this.state.toggle ? this.showAmenities() : null}
        </div>
      )
    }
  }
}

export default withNamespaces()(Room);


const styles = {
  amenitiesDiv: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    color: 'black',
    textAlign: "center",
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '15px',
    paddingTop: '15px',
  },
  amenitiesFont: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '15px',
    
  }

}
