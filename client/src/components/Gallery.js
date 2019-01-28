import React from 'react';
import { Card, Container, Image, Menu, Item, Grid, } from 'semantic-ui-react';
import { SubHeader, GalleryIconLine, GalleryGoldButton, GalleryWhiteButton } from '../styles/AppStyles';
import FLEUR_ICON from '../assets/icons/miscellaneous_icons/FLEUR_ICON.png';
import IMGone from '../assets/images/GalleryImages/HotelandGrounds/IMGone.jpg';
import IMGeight from '../assets/images/GalleryImages/HotelandGrounds/IMGeight.jpg';
import IMGfive from '../assets/images/GalleryImages/HotelandGrounds/IMGfive.jpg';
import IMGfour from '../assets/images/GalleryImages/HotelandGrounds/IMGfour.jpg';
import IMGthree from '../assets/images/GalleryImages/HotelandGrounds/IMGthree.jpg';
import IMGtwo from '../assets/images/GalleryImages/HotelandGrounds/IMGtwo.jpg';
import IMGseven from '../assets/images/GalleryImages/HotelandGrounds/IMGseven.jpg';
import IMGsix from '../assets/images/GalleryImages/HotelandGrounds/IMGsix.jpg';
import rainbow from '../assets/images/rainbow2.jpg';
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import ModalImage from 'react-modal-image';


class Gallery extends React.Component {
  state = { cards: [], };


  renderCards = () => {
    return this.state.cards.map(content => (
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
    const { t } = this.props;

    return (
      <div style={styles.background} >
        <Container>
          <SubHeader style={styles.font}>{t("Our Gallery")}</SubHeader>
          <div style={styles.line}>
            <GalleryIconLine />
            <Image centered
              style={styles.icon}
              src={FLEUR_ICON}
            />
            <GalleryIconLine />
          </div>
          <div style={styles.button}>
            <Menu secondary stackable>

              <Menu.Item fitted='horizontally'>
                <Link to="/underconstruction">
                  <GalleryGoldButton>{t("HOTEL & GROUNDS")}</GalleryGoldButton>
                </Link>
              </Menu.Item>

              <Menu.Item fitted='horizontally'>
                <Link to="/underconstruction">
                  <GalleryGoldButton>{t("ROOM/CABIN")}</GalleryGoldButton>
                </Link>
              </Menu.Item>
              <Menu.Item fitted='horizontally'>
                <Link to="/underconstruction">
                  <GalleryGoldButton>{t("BATHROOM")}</GalleryGoldButton>
                </Link>
              </Menu.Item>
              <Menu.Item fitted='horizontally'>
                <Link to="/underconstruction">
                  <GalleryGoldButton>{t("DINING")}</GalleryGoldButton>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          {/* <Card.Group centered itemsPerRow={4}>
            {this.renderCards()}
          </Card.Group> */}
          <Grid equal height row stackable>

            <Grid.Row columns={4} stackable style={{ height: "275px" }}>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGone}
                  large={IMGone}
                />
              </Grid.Column>
              <Grid.Column stretched>
                <div style={{ display: 'flex', alignItems: 'stretch', }}>
                  <ModalImage
                    small={IMGtwo}
                    large={IMGtwo}
                  />
                </div>
              </Grid.Column >
              <Grid.Column stretched>
                <ModalImage
                  small={IMGthree}
                  large={IMGthree}
                />
              </Grid.Column>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGfour}
                  large={IMGfour}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4} style={{ height: "275px" }}>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGfive}
                  large={IMGfive} />
              </Grid.Column>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGsix}
                  large={IMGsix} />
              </Grid.Column>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGseven}
                  large={IMGseven} />
              </Grid.Column>
              <Grid.Column stretched>
                <ModalImage
                  small={IMGeight}
                  large={IMGeight}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Item style={styles.button}>
            <Link to="/underconstruction">
              <GalleryWhiteButton>{t("VIEW MORE")}</GalleryWhiteButton>
            </Link>

          </Item>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(Gallery);


const styles = {
  background: {
    backgroundColor: "rgb(35, 35, 35)",
    paddingBottom: '100px',
    marginTop: '100px',
  },
  font: {
    color: 'white',
    fontFamily: "'Playfair Display', serif",
    fontSize: "50px",
    fontWeight: 'lighter',
  },
  icon: {
    padding: '10px',
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
  },
  grid: {
    display: 'block',
  },
  image: {
    width: '1000px',
  }
}



