import React from 'react';
import { Card, Container, Image, Menu, Item, Grid,} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SubHeader, GalleryIconLine, GalleryGoldButton, GalleryWhiteButton} from '../styles/AppStyles';
import FLEUR_ICON from '../assets/icons/miscellaneous_icons/FLEUR_ICON.png';
import IMGone from '../assets/images/GalleryImages/HotelandGrounds/IMGone.jpg';
import IMGeight from '../assets/images/GalleryImages/HotelandGrounds/IMGeight.jpg';
import IMGfive from '../assets/images/GalleryImages/HotelandGrounds/IMGfive.jpg';
import IMGfour from '../assets/images/GalleryImages/HotelandGrounds/IMGfour.jpg';
import IMGthree from '../assets/images/GalleryImages/HotelandGrounds/IMGthree.jpg';
import IMGtwo from '../assets/images/GalleryImages/HotelandGrounds/IMGtwo.jpg';
import IMGseven from '../assets/images/GalleryImages/HotelandGrounds/IMGseven.jpg';
import IMGsix from '../assets/images/GalleryImages/HotelandGrounds/IMGsix.jpg';

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
            <div style={styles.line}>
            <GalleryIconLine />
          <Image centered 
          style={styles.icon} 
          src={FLEUR_ICON}
          />
            <GalleryIconLine />
          </div>
          <div style={styles.button}>
          <Menu secondary>

          <Menu.Item fitted='horizontally'>
          <GalleryGoldButton>HOTEL & GROUND</GalleryGoldButton>
          </Menu.Item>

          <Menu.Item fitted='horizontally'>
          <GalleryGoldButton>ROOM/CABIN</GalleryGoldButton>
          </Menu.Item>
          <Menu.Item fitted='horizontally'>
          <GalleryGoldButton>BATHROOM</GalleryGoldButton>
          </Menu.Item>
          <Menu.Item fitted='horizontally'>
          <GalleryGoldButton>DINING</GalleryGoldButton>
          </Menu.Item>
          </Menu>
          </div>
          {/* <Card.Group centered itemsPerRow={4}>
            {this.renderCards()}
          </Card.Group> */}
          <Grid>
            <Grid.Row columns={4}> 
              <Grid.Column stretched>
                <Image src={IMGone}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={IMGtwo}/>
              </Grid.Column >
              <Grid.Column stretched>
                <Image src={IMGthree}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={IMGfour}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4}> 
              <Grid.Column stretched>
                <Image src={IMGfive}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={IMGsix}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={IMGseven}/>
              </Grid.Column>
              <Grid.Column stretched>
                <Image src={IMGeight}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>


          <Item style={styles.button}>
          <a href={'https://www.google.com/imghp'}>
          <GalleryWhiteButton>VIEW MORE</GalleryWhiteButton>
          </a>
          </Item>
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
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '-40px',
    marginRight: '475px',
    marginLeft: '475px',
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



