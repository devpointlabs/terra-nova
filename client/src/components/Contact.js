import React from 'react';
import { Icon, Card, Container, } from 'semantic-ui-react';
import { SubHeader, RoomBody } from '../styles/AppStyles';
import { withNamespaces } from 'react-i18next';

const Contact = ({t}) => (
  <div styles={styles.background}>
    <Container>
      <SubHeader>
        {t("Contact")}
  </SubHeader>
      <RoomBody>{t("If you would like to know more, please contact us")}</RoomBody>
      <br />
      <br />
      <br />
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

export default withNamespaces()(Contact);

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
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