import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Title1 } from ""
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const AboutUs = () => (



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