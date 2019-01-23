import React from 'react';
import { Card, Icon, Segment } from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';

class Room extends React.Component {
  state = { toggle: false }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  showAmenities = () => {
    const {t} = this.props;
    const { max, size, view, bed } = this.props
    return (
      <Card.Description textAlign="center">
        <Segment basic centered textAlign="center" style={styles.amenitiesFont}>
           <p>{t("Accommodates")} {max} {t("People")} </p>
            <p>{t("Size")}: {t(size)} </p>
            <p>{t("View")}: {t(view)} </p>
            <p>{t("Bed")}: {t(bed)}</p>
          
        </Segment>
      </Card.Description>
    )
  };

  render() {
    const {t} = this.props;
    if (this.state.toggle === false) {
      return (
        <div style={styles.amenitiesDiv}>
          {t("Room Details")}
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
