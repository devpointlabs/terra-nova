import React from "react";
import { Header, Card } from 'semantic-ui-react';

class Rooms extends React.Component {
   state = { rooms: [] }


  render() {
    return (
      <div>
        <Header as="h1" textAlign="center"> Our Rooms </Header>
        <Header as="h4" textAlign="center"> When you host a party or family reunion, the special celebrations let </Header>
        <Header as="h4" textAlign="center"> you strengthen bonds with each other </Header>
        {/* link to room */}
        <Card.Group itemsPerRow={3}>
          {this.renderItems()}
        </Card.Group>
   
      </div>
    )
  }
}

export default Rooms;