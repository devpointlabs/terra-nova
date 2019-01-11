import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, Container, Image, } from 'semantic-ui-react';
import { SubHeader, RoomBody, } from '../styles/AppStyles';

class Gallery extends React.Component {
  state = { photos: ''}

  render() {
    return (


      <div styles={styles.background}>
        <Container>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SubHeader>Gallery</SubHeader>
          <RoomBody>Please Enjoy Our Gallery of our Property & Commadities.</RoomBody>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card.Group centered itemsPerRow={4}>
            <Card raised centered textAlign fluid style={cardStyles.card}>
              <Card.Content>
                <Card.Header style={fontColor.font}>
                  <i>PHOTO TITLE</i>
                </Card.Header>
                <br />
                <Image src="https://picsum.photos/300?random" alt="" />
                <br />
                <br />
                <Card.Meta>
                  PICTURE CATEGORY/DESCRIPTION
                </Card.Meta>
              </Card.Content>
            </Card>
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

