import React from 'react';
import { Card, Icon, Segment } from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';




class Room extends React.Component {
  state = { toggle: false }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  showAmenities = () => {
    const { max } = this.props
    return (
      <Card.Description textAlign="center">
      <Segment>
        <ul>
          <ul>Max {max} Persons </ul>
          <ul>Size 35 m2/ 376 ft</ul>
          <ul>View: Ocean</ul>
          <ul>Bed: King-size or Twin Beds</ul>
        </ul>
        </Segment>
      </Card.Description>
    )
  };

  render() {
    if (this.state.toggle === false) {
      return (
        <div>
          <Icon style={{ cursor: 'pointer' }} size="large" name="angle double down" onClick={() => this.toggle()}></Icon>
          {this.state.toggle ? this.showAmenities() : null}
        </div>
      )
    } else {
      return (
        <div>
          <Icon style={{ cursor: 'pointer' }} size="large" name="angle double up" onClick={() => this.toggle()}></Icon>
          {this.state.toggle ? this.showAmenities() : null}
        </div>
      )
    }
  }
}

export default withNamespaces()(Room);



