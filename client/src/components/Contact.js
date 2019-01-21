import React from 'react';
import { Icon, Card, Container, } from 'semantic-ui-react';
import { RoomBody, SubHeaderTwo } from '../styles/AppStyles';

const Contact = () => (
  <div styles={styles.background}>
    <Container>
      <SubHeaderTwo>
        Contact
        <div style={styles.hr}></div>
  </SubHeaderTwo>
      <RoomBody>If you would like to know more, please reach out to us: </RoomBody>
      <Card.Group centered itemsPerRow={2}>
        <Card raised centered textAlign fluid style={cardStyles.card}>
          <Card.Content>
            <Card.Header>
            </Card.Header>
            <Icon
              rotated='clockwise'
              color='grey'
              size='huge'
              name='phone' />
          </Card.Content>
          <Card.Content extra>
            1-TER-RAN-OVVA
  </Card.Content>
        </Card>
        <Card raised centered textAlign fluid style={cardStyles.card}>
          <Card.Content>
            <Card.Header>
            </Card.Header>
            <Icon
              color='grey'
              size='huge'
              name='mail' />
          </Card.Content>
          <Card.Content extra>
            terra@nova.com
  </Card.Content>
        </Card>

      </Card.Group>
    </Container>
  </div>
)

export default Contact;

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
  },
  hr: {
    borderBottom: "1px solid black",
    width: '20%',
    marginLeft: '435px',
    paddingTop: '3px',
  
  }
}

const cardStyles = {
  card: {
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '10px 10px'
  }
}