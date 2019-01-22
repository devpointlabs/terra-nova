import React from 'react';
import { SubHeader, HeaderLine, Title3, } from "../styles/AppStyles";
import { Card, Image, Container, Grid } from "semantic-ui-react";

const Events = () => {
    return (
        <div>
            <Container>
                <div>
                <Grid columns={2} padded='vertically'>    
                <SubHeader>Our Events</SubHeader>
                {/* <HeaderLine/> */}
                </Grid>
                </div>
                <Card.Group centered itemsPerRow={3}>
                    <Card style={styles.card}>
                        <Image />
                        <Title3>Wedding Day</Title3>
                    </Card>
                    <Card style={styles.card}>
                        <Image />
                        <Title3>Golf Cup 2017</Title3>
                    </Card>
                    <Card style={styles.card}>
                        <Image />
                        <Title3>Beach Sports</Title3>
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
        height: '400px',
    }
}

// const subHeader = {
//     fontSize: '3.0em',
//     fontWeight: 'lighter',
//     textAlign: 'left',
//     fontFamily: "'Playfair Display', serif",
//     paddingTop: '110px',
// }

export default Events;