import React from "react";
import { Card, Image, Container, Grid } from "semantic-ui-react";
import { WhiteButton, HeaderLine } from "../styles/AppStyles";
import montana from "../assets/images/montana.jpg";
import AIRPORT_TAXI_ICON from "../assets/icons/amenities_icons/AIRPORT_TAXI_ICON.png";
import AWESOME_PACKAGES_ICON from "../assets/icons/amenities_icons/AWESOME_PACKAGES_ICON.png";
import BUFFET_BREAKFAST_ICON from "../assets/icons/amenities_icons/BUFFET_BREAKFAST_ICON.png";
import CLEANING_EVERYDAY_ICON from "../assets/icons/amenities_icons/CLEANING_EVERYDAY_ICON.png";
import LAKE_VIEW_ICON from "../assets/icons/amenities_icons/LAKE_VIEW_ICON.png";
import Master_Bedroom_Icon from "../assets/icons/amenities_icons/Master_Bedroom_Icon.png";
import POOL_SPA_ICON from "../assets/icons/amenities_icons/POOL_SPA_ICON.png";
import MAKE_EXPORTABLE_ICON from "../assets/icons/amenities_icons/MAKE_EXPORTABLE_ICON.png";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

const AboutUs = ({ t }) => (
  <Container>
    <div style={background}>
      <div>
        <Grid columns={2} padded='vertically'stackable>
          <Grid.Column>
            <h1 style={subHeader}>{t("About Us")}</h1>
            <HeaderLine />
            <p style={text}> {t("Terra Nova Cabins represents the best in western hospitality and comfort, wrapped in contemporary")}
              {t("expression that will inspire your own unique adventures.")}
              <br />
              <br />
              {t("Both a haven from the world and a basecamp for adventure, Terra Nova Cabins will be your new southwestern")}
              {t("Montana destination rental.")}
            </p>
            <Link to="/underconstruction">
            <WhiteButton>{t("Read More")}</WhiteButton>
            </Link>
          </Grid.Column>
        <Grid.Column stackable>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Image src={montana} size="large" centered />
        </Grid.Column>
        </Grid>
    </div>

    <Card.Group centered itemsPerRow={4} style={cardGroup} stackable>
      <Card style={styles.card} >
        <Image src={Master_Bedroom_Icon} style={styles.image}/>
        <Card.Description>{t("MASTER BEDROOM")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={LAKE_VIEW_ICON} style={styles.image} />
        <Card.Description>{t("LAKE VIEW BALCONY")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={POOL_SPA_ICON} style={styles.image}/>
        <Card.Description>{t("POOL & SPA")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={MAKE_EXPORTABLE_ICON} style={styles.image}/>
        <Card.Description>{t("WIFI COVERAGE")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={AWESOME_PACKAGES_ICON} style={styles.image}/>
        <Card.Description>{t("AWESOME PACKAGES")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image SRC={CLEANING_EVERYDAY_ICON} style={styles.image}/>
        <Card.Description>{t("CLEANING EVERYDAY")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={BUFFET_BREAKFAST_ICON} style={styles.image}/>
        <Card.Description>{t("BUFFET BREAKFAST")}</Card.Description>
      </Card>
      <Card style={styles.card}>
        <Image src={AIRPORT_TAXI_ICON} style={styles.image}/>
        <Card.Description>{t("AIRPORT TAXIS")}</Card.Description>
      </Card>
    </Card.Group>
    </div>
  </Container >
)

export default withNamespaces()(AboutUs);

const styles = {
  card: {
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px 20px',
    color: 'black',
    backgroundColor: 'white'

  },
  image: {
    backgroundColor: 'white',
    marginBottom: '20px',

  }
}

const text = {
  textAlign: 'left',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '16px',
  paddingTop: '50px',
  paddingBottom: '50px',
  color: 'black'
}

const background = {
  paddingBottom: '150px',
  marginTop: '50px',
}

const cardGroup = {
  paddingTop: '50px',
  paddingBottom: '50px'
}

const subHeader = {
  fontSize: '3.0em',
  fontWeight: 'lighter',
  textAlign: 'left',
  fontFamily: "'Playfair Display', serif",
  paddingTop: '110px',
  color: 'black',
  // paddingBottom: '50px'
}


