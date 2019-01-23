import React from "react";
import { Form, Icon, Container, Segment, Button, Modal, Image, Header } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';
import axios from "axios";

// create links for social
class EmailForm extends React.Component {
  state = { email: "", showModal: false }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = { ...this.state };
    axios.post('/api/mailers', email)
    this.setState({ email: "" })
    { this.emailModal() };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleOpen = () => this.setState({ showModal: true })

  handleClose = () => this.setState({ showModal: false })



  emailModal = () => (
    <Modal trigger={<Button onClick={this.handleOpen}>Submit</Button>}
      open={this.state.showModal}
      close={this.handleClose}
      size='small'
      centered={false}
      basic
    >
      <Modal.Header> Terra Nova Cabins</Modal.Header>
      <Modal.Content image>
        <Image wrapped
          size='small'
          src={Terra_Nova_Cabins_Logo} />
        <Modal.Description>
          <Header>Success!</Header>
          <p> You have been signed up for the Terra Nova Newsletter.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="white" onClick={this.handleClose}>
          <Icon name="checkmark"/> Got it!
          </Button>
        </Modal.Actions>
    </Modal>

  )

  showModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <Segment style={styles.background} basic>
        <Container style={styles.flexbox}>
          <div style={styles.flexbox}>
            <Icon name="mail" size="huge" />
            <Form fluid onSubmit={this.handleSubmit}>
              <Form.Input
                name="email"
                placeholder="Your Email Address "
                icon="paper plane"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form>

          </div>
          {this.emailModal()}
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

export default EmailForm;


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
  }
};





