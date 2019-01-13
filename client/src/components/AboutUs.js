import React from "react";
import { Card, Image, Container, Grid, } from "semantic-ui-react";
import { WhiteButton, HeaderLine, SubHeader} from "../styles/AppStyles";
import photogroup from "../assets/images/photogroup.png";





const AboutUs = () => (
  <Container>
    <div style={background}>
      <div>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <h1 style={subHeader}>About Us</h1>
            <HeaderLine/>
            <p style={text}> Contrary to popular belief, Lorem isn't simply random text. It has roots in classical literature 
              from 45 BC, making it over 2000 years old. Avalon's leading hotels with gracious island hospitality,
              thoughtful amentities and distinctive.
              <br/>
              <br/>
              Richard Mcklintock, a professor at Hampton-Sydney College in Virginia, looked up some of the more
              obscure words in Latin. Consecteteur from a more obscure Latin text...
            </p>
            <WhiteButton>Read More</WhiteButton>
          </Grid.Column>
          <Grid.Column>
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
          <Image />
          <Card.Content>MASTER BEDROOM</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>SEA VIEW BALCONY</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>POOL & SPA</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>WIFI COVERAGE</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>AWESOME PACKAGES</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>CLEANING EVERYDAY</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>BUFFET BREAKFAST</Card.Content>
        </Card>
        <Card style={styles.card}>
          <Image />
          <Card.Content>AIRPORT TAXIS</Card.Content>
        </Card>
      </Card.Group>
    </div>
  </Container>
)

export default AboutUs;

const styles = {
  card: {
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px 20px'
  }
}

const text = {
  textAlign: 'left',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '16px',
  paddingTop: '50px',
  paddingBottom: '50px'
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
  textAlign: 'left',
  fontFamily: "'Playfair Display', serif",
  paddingTop: '110px',
  // paddingBottom: '50px'
}


