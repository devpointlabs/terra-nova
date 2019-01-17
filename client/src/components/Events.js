import React from 'react';
import { SubHeader, HeaderLine } from "../styles/AppStyles";
import { Card, Image, Container, } from "semantic-ui-react";

const Events = () => {
    return (
        <div>
            <Container>
                <div>
                <SubHeader>Our Events</SubHeader>
                {/* <hr style={}></hr> */}
                </div>
                <Card.Group centered itemsPerRow={3}>
                    <Card style={styles.card}>
                        <Image />
                        <Card.Content>Wedding Day</Card.Content>
                    </Card>
                    <Card style={styles.card}>
                        <Image />
                        <Card.Content>Gold Club 2017</Card.Content>
                    </Card>
                    <Card style={styles.card}>
                        <Image />
                        <Card.Content>Beach Sports</Card.Content>
                    </Card>
                </Card.Group>
            </Container>
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
        padding: '20px 20px',
    }
}

const subHeader = {
    fontSize: '3.0em',
    fontWeight: 'lighter',
    textAlign: 'left',
    fontFamily: "'Playfair Display', serif",
    paddingTop: '110px',
}

export default Events;