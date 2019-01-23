import React from "react";
import { Form, Icon, Container, Segment, Modal, Image, } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';
import { withNamespaces } from 'react-i18next';
import axios from "axios";
import { BlackButton2, WhiteButton } from "../styles/AppStyles";


// create links for social
class EmailForm extends React.Component {
  state = { email: "", showModal: false }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = { ...this.state };
    axios.post('/api/mailers', email)
    this.setState({ email: "" })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleOpen = () => this.setState({ showModal: true })

  handleClose = () => this.setState({ showModal: false })



  emailModal = () => (
    <Modal trigger={<BlackButton2 onClick={this.handleOpen}>Sign Up</BlackButton2>}
      open={this.state.showModal}
      close={this.handleClose}
      size='small'
      centered={false}
      basic
    >
      <Modal.Header style={styles.header}> Terra Nova Cabins</Modal.Header>
      <Modal.Content image>
        <Image wrapped
          size='small'
          src={Terra_Nova_Cabins_Logo} />
        <Modal.Description>
          <Modal.Header style={styles.header2}>Success!</Modal.Header>
          <p style={styles.body}> You have been signed up for the Terra Nova Newsletter.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <WhiteButton
          color="white"
          onClick={this.handleClose}
          centered
        >
          <Icon name="checkmark" /> Got it!
          </WhiteButton>
      </Modal.Actions>
    </Modal>

  )

  showModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const {t} = this.props;
    return (
      <Segment style={styles.background} basic>
        <Container style={styles.flexbox}>
          <div style={styles.flexbox}>
            {/* <Icon name="mail" size="huge" centered /> */}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input style={styles.body2}
                  icon="paper plane"
                  name="email"
                  placeholder={t("Your Email Address")}
                  value={this.state.email}
                  onChange={this.handleChange}
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
    paddingRight: "240px",
    paddingLeft: "240px",
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




