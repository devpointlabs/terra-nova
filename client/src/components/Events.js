import React from 'react';
import { SubHeader } from "../styles/AppStyles";
import { Card, Image } from "semantic-ui-react";

const Events = () => {
    return( 
    <div>
    <SubHeader><u>Our Events</u></SubHeader>
    <Card.Group centered itemsPerRow={3}>
        <Card style={styles.card}>
            <Image/>
        <Card.Content>Wedding Day</Card.Content>
        </Card>
        <Card style={styles.card}>
            <Image/>
        <Card.Content>Gold Club 2017</Card.Content>
        </Card>
        <Card style={styles.card}>
            <Image/>
        <Card.Content>Beach Sports</Card.Content>
        </Card>
    </Card.Group>
    </div>
    )
};

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

export default Events;