import React from "react";
import { Card, Image, Container, Grid, } from "semantic-ui-react";
import { WhiteButton, HeaderLine, } from "../styles/AppStyles";
import photogroup from "../assets/images/photogroup.png";
import AIRPORT_TAXI_ICON from "../assets/icons/amenities_icons/AIRPORT_TAXI_ICON.png";
import AWESOME_PACKAGES_ICON from "../assets/icons/amenities_icons/AWESOME_PACKAGES_ICON.png";
import BUFFET_BREAKFAST_ICON from "../assets/icons/amenities_icons/BUFFET_BREAKFAST_ICON.png";
import CLEANING_EVERYDAY_ICON from "../assets/icons/amenities_icons/CLEANING_EVERYDAY_ICON.png";
import LAKE_VIEW_ICON from "../assets/icons/amenities_icons/LAKE_VIEW_ICON.png";
import Master_Bedroom_Icon from "../assets/icons/amenities_icons/Master_Bedroom_Icon.png";
import POOL_SPA_ICON from "../assets/icons/amenities_icons/POOL_SPA_ICON.png";
import MAKE_EXPORTABLE_ICON from "../assets/icons/amenities_icons/MAKE_EXPORTABLE_ICON.png";
import { withNamespaces } from 'react-i18next';


const AboutUs = ({ t }) => (
  <Container>
    <div style={background}>
      <div>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <h1 style={subHeader}>{t("About Us")}</h1>
            <HeaderLine/>
            <p style={text}> Contrary to popular belief, Lorem isn't simply random text. It has roots in classical literature 
              from 45 BC, making it over 2000 years old. Avalon's leading hotels with gracious island hospitality,
              thoughtful amentities and distinctive.
              <br/>
              <br/>
              Richard Mcklintock, a professor at Hampton-Sydney College in Virginia, looked up some of the more
              obscure words in Latin. Consecteteur from a more obscure Latin text...
            </p>
            <WhiteButton>{t("Read More")}</WhiteButton>
          </Grid.Column>
          <Grid.Column>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Image src={photogroup} size="large"/>
          </Grid.Column>
        </Grid>
      </div>

      <Card.Group centered itemsPerRow={4} style={cardGroup}>
        <Card style={styles.card}>
          <Image src={Master_Bedroom_Icon}/>
          <Card.Content>{t("MASTER BEDROOM")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={LAKE_VIEW_ICON}/>
          <Card.Content>{t("LAKE VIEW BALCONY")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={POOL_SPA_ICON}/>
      <Card.Content>{t("POOL & SPA")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={MAKE_EXPORTABLE_ICON}/>
          <Card.Content>{t("WIFI COVERAGE")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={AWESOME_PACKAGES_ICON}/>
          <Card.Content>{t("AWESOME PACKAGES")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image SRC={CLEANING_EVERYDAY_ICON} />
          <Card.Content>{t("CLEANING EVERYDAY")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={BUFFET_BREAKFAST_ICON}/>
          <Card.Content>{t("BUFFET BREAKFAST")}</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image src={AIRPORT_TAXI_ICON}/>
          <Card.Content>{t("AIRPORT TAXIS")}</Card.Content>
        </Card>
      </Card.Group>
    </div>
  </Container>
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
    color: 'black'

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


