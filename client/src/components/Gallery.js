import React from 'react';
import { Card, Container, Image, Menu, } from 'semantic-ui-react';
import { SubHeader, GalleryIconLine, GalleryGoldButton, } from '../styles/AppStyles';
import FLEUR_ICON from '../assets/icons/miscellaneous_icons/FLEUR_ICON.png';

class Gallery extends React.Component {
  state = { cards: [], };

  renderCards = () => {
    return this.state.cards.map( content => (
      <Card raised centered textAlign fluid style={cardStyles.card}>
        <Card.Content>
          <Card.Header style={styles.font}>
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
      <div style={styles.background} >
        <Container>
          <SubHeader style={styles.font}>Our Gallery</SubHeader>
          <GalleryIconLine />
          <Image centered style={styles.icon} src={FLEUR_ICON}/>
          <div style={styles.button}>
          <Menu secondary>

          <Menu.Item fitted='horizontally'>
          <GalleryGoldButton>HOTEL & GROUND</GalleryGoldButton>
          </Menu.Item>

          <Menu.Item>
          <GalleryGoldButton>ROOM/CABIN</GalleryGoldButton>
          </Menu.Item>
          <Menu.Item>
          <GalleryGoldButton>BATHROOM</GalleryGoldButton>
          </Menu.Item>
          <Menu.Item>
          <GalleryGoldButton>DINING</GalleryGoldButton>
          </Menu.Item>
          </Menu>
          </div>
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
    backgroundColor: "rgb(35, 35, 35)",
    paddingBottom: '100px',
  },
  font: {
    color: 'white',
    fontFamily: "'Playfair Display', serif",
    fontSize: "50px",
    fontWeight: 'lighter',
  }, 
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    padding: '50px',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center'
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



