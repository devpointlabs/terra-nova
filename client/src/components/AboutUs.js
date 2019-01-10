import React from "react";
import { Card, Image } from "semantic-ui-react";
import { SubHeader } from "../styles/AppStyles";
import { Grid } from "semantic-ui-react";




const AboutUs = () => (
 <div>
   <div>
     <Grid columns={2} padded='vertically'>
     <Grid.Column>
      <SubHeader><u>About Us</u></SubHeader>
        <p> Contrary to popular belief, Lorem isn't simply random test. </p>
      </Grid.Column>
      <Grid.Column>
        <SubHeader>Picture</SubHeader>
        </Grid.Column>
    </Grid>
  </div>
 
  <Card.Group centered itemsPerRow={4}>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>MASTER BEDROOM</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>SEA VIEW BALCONY</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>POOL & SPA</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>WIFI COVERAGE</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>AWESOME PACKAGES</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>CLEANING EVERYDAY</Card.Content>
    </Card> 
    <Card style={styles.card}>
      <Image/>
      <Card.Content>BUFFET BREAKFAST</Card.Content>
    </Card>
    <Card style={styles.card}>
      <Image/>
      <Card.Content>AIRPORT TAXIS</Card.Content>
    </Card>
  </Card.Group>
  </div>
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