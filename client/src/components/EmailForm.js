import React from "react";
import { Form, Icon, Container, Segment, Modal, Image, Button } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';
import { withNamespaces } from 'react-i18next';
import axios from "axios";
import { BlackButton2, WhiteButton } from "../styles/AppStyles";


// create links for social
class EmailForm extends React.Component {
  state = { email: "", open: false }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = { ...this.state };
    axios.post('/api/mailers', email)
    this.setState({ email: "" })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })



  emailModal = () => {
    const { t } = this.props;
    const { open } = this.state;
    return(
    <Modal trigger={<Button onSubmit={this.open}>{t("Stay Connected")}</Button>}
      open={open}
      onOpen={this.open}
      onClose={this.close}
      size='small'
      centered={false}
      basic
      stackable
    >
      <Modal.Header style={styles.header} stackable> Terra Nova Cabins</Modal.Header>
      <Modal.Content image stackable>
        <Image wrapped
          stackable
          size='small'
          src={Terra_Nova_Cabins_Logo} />
        <Modal.Description stackable>
          <Modal.Header style={styles.header2} stackable>Success!</Modal.Header>
          <p style={styles.body}> You have been signed up for the Terra Nova Newsletter.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions stackable>
        <WhiteButton
          color="white"
          onClick={this.close}
          centered
          stackable
        >
          <Icon name="checkmark" /> Got it!
          </WhiteButton>
      </Modal.Actions>
    </Modal>
    )
  }

  // showModal = () => {
  //   this.setState({ showModal: !this.state.showModal })
  // }

  render() {
    const {t} = this.props;
    return (
      <Segment style={styles.background} basic stackable>
        <Container style={styles.flexbox} stackable>
          <div style={styles.flexbox}>
            {/* <Icon name="mail" size="huge" centered /> */}
            <Form onSubmit={this.handleSubmit}stackable>
              <Form.Group stackable>
                <Form.Input style={styles.body2}
                  icon="paper plane"
                  name="email"
                  placeholder={t("Your Email Address")}
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  stackable
                  required
                />
                {this.emailModal()}
              </Form.Group>
            </Form>

          </div>
          <div>
            <Icon inverted color="grey" name="instagram" size="big" />
            <Icon inverted color="grey" name="facebook" size="big" />
            <Icon inverted color="grey" name="twitter" size="big" />
          </div>
        </Container>
      </Segment>
    )
  }
}

export default withNamespaces()(EmailForm);


const styles = {
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 0,
    // margin: 0,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "30px"
  },
  background: {
    paddingTop: "20px",
    paddingBottom: "20px",
    // paddingRight: "240px",
    // paddingLeft: "240px",
    backgroundColor: "#363636",
    width: "100%",
    marginBottom: "-15px",
  },
  header: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
  },
  header2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
},
  body: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
  },
  body2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
  },
};