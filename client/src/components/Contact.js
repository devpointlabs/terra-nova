import React from 'react';
import axios from 'axios';
import { Icon, Card, Container, Form, Grid, } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import { RoomBody, SubHeaderTwo } from '../styles/AppStyles';

class Contact extends React.Component {
  state = { first_name: '', last_name: '', email: '', message: '', }

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = { ...this.state };
    axios.post('/api/mailers', contact)
      // .then(res => this.props.history.push('/contact'))
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

// Need Modal for submitting and create columns in mailer for state objects

  render() {
    const { t } = this.props;
    const { first_name, last_name, email, message, } = this.state;
    return (

      <div style={styles.background}>
        <Container>
          <SubHeaderTwo style={styles.hr}>
            {t("Contact")}
          </SubHeaderTwo>
          <RoomBody style={styles.text}>{t("If you would like to know more, please contact us")}</RoomBody>
          <Grid columns={2}>
            <Grid.Column>
              <Form style={form.styling}>
                <Form.Group widths='equal'>
                  <Form.Input
                    name="first_name"
                    label="First Name"
                    placeholder="First Name"
                    required
                    value={first_name}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    name="last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    required
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={this.handleChange}
                />
                <div style={form.styling}>
                  <Form.TextArea
                    name="message"
                    label="Message"
                    placeholder="Message"
                    required
                    width='100'
                    value={message}
                    onChange={this.handleChange}
                  />
                </div>
                <Form.Button style={styles.button}>{t("Submit")}</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <br />
              {/* <Card.Group centered itemsPerRow={2}> */}
              <Grid.Row>

                <Card basic centered textAlign fluid style={cardStyles.card}>
                  <Card.Description>
                    <Icon
                      rotated='clockwise'
                      color='grey'
                      size='huge'
                      name='phone' />
                  </Card.Description>
                  <br />
                  <Card.Description extra>
                    1-TER-RAN-OVVA
        </Card.Description>
                </Card>
              </Grid.Row>
              <br />
              <Grid.Row>

                <Card basic centered textAlign fluid style={cardStyles.card}>
                  <Card.Description>
                    <Icon
                      color='grey'
                      size='huge'
                      name='mail' />
                  </Card.Description>
                  <br />
                  <Card.Description extra>
                    terra@nova.com
      </Card.Description>
                </Card>
              </Grid.Row>
              {/* </Card.Group> */}
            </Grid.Column>
          </Grid>
          <br />
        </Container>
      </div >
    )
  }
}

export default withNamespaces()(Contact);

const styles = {
  background: {
    // backgroundColor: "#F5F5F5",
    marginTop: '160px',

  },
  hr: {
    borderBottom: "1px solid black",
    width: '20%',
    marginLeft: '435px',
    paddingTop: '3px',
  },
  button: {
    backgroundColor: '#555555',
    border: '2px solid #f8f8ff',
    color: 'white',
    padding: '10px 40px',
    textAlign: "center",
    textDecoration: 'none',
    display: 'flex',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    marginTop: '10px',
  },
  text: {
    marginBottom: '1px',
  }
}

const cardStyles = {
  card: {
    display: 'flex',
    fontSize: '16px',
    justifyDescription: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '10px 10px'
  }
}

const form = {
  styling: {
    fontFamily: "'Playfair Display', serif",
  },
}