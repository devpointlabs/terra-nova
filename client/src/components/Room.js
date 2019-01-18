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
        <Segment basic centered textAlign="center">
           <p> Max {max} Persons </p>
            <p>Size 35 m2/ 376 ft </p>
            <p>View: Ocean </p>
            <p>Bed: King-size or Twin Beds</p>
          
        </Segment>
      </Card.Description>
    )
  };

  render() {
    if (this.state.toggle === false) {
      return (
        <div style={styles.amenitiesDiv}>
          Amenities
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

}
