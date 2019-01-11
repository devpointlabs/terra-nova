import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, Container, Image, } from 'semantic-ui-react';
import { SubHeader, RoomBody, } from '../styles/AppStyles';

class Gallery extends React.Component {
  state = { cards: [], };

  renderCards = () => {
    return this.state.cards.map( content => (
      <Card raised centered textAlign fluid style={cardStyles.card}>
        <Card.Content>
          <Card.Header style={fontColor.font}>
            <i>{content}TITLE</i>
          </Card.Header>
          <br />
          <Image src="https://picsum.photos/300?random" alt="" />
          <br />
          <br />
          <Card.Meta>
            {content}
            PICTURE CATEGORY/DESCRIPTION
                </Card.Meta>
        </Card.Content>
      </Card>
    ))
  };


  render() {
    return (
      <div styles={styles.background} >
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SubHeader>Gallery</SubHeader>
          <RoomBody>Please Enjoy Our Gallery of our Properties & Commodities.</RoomBody>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card.Group centered itemsPerRow={4}>
            {this.renderCards()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}

export default Gallery;


const styles = {
  background: {
    backgroundColor: "#F5F5F5",
  }
}

const cardStyles = {
  card: {
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px 20px',
    color: 'red',
  }
}

const fontColor = {
  font: {
    color: '#666666'
  }
}

