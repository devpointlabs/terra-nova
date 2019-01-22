import React from "react";
import { Form, Icon, Container, Segment, Button, Modal } from "semantic-ui-react";
import axios from "axios";

// create links for social
class EmailForm extends React.Component {
  state = { email:"", showModal:false }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const email = {...this.state};
    axios.post('/api/mailers', email)
    this.setState({ email: ""})
    {this.emailModal()}
}

handleChange = ({ target: { name, value } }) => {
  this.setState({ [name]: value });
}

emailModal = () => {
  
}

showModal = () => {
  this.setState({showModal: !this.state.showModal})
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
              <Button>Submit</Button>
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


// const EmailForm = () => (
//   <Segment style={styles.background} basic>
//     <Container style={styles.flexbox}>
//       <Grid columns={4}>
//       <Grid.Column floated="right" width={3}>
//         <Icon name="mail" size="huge" />
//       </Grid.Column>
//         <Grid.Column floated="left" width={7} textAlign="right" centered>
//           <Form>
//             <Form.Input 
//               name="email"
//               placeholder="Your Email Address "
//               icon="paper plane"
//             />
//           </Form>
//         </Grid.Column>
//         <Grid.Column floated="right" width={6} textAlign="right">
//           <Icon style={styles.icon} inverted color="grey" name="instagram" size="big" />
//           <Icon inverted color="grey" name="facebook" size="big" />
//           <Icon inverted color="grey" name="twitter" size="big" />
//         </Grid.Column>
//       </Grid>
//     </Container>
//   </Segment>
// )

// export default EmailForm;


// const styles = { 
//   background: {
//     paddingTop: "20px",
//     paddingBottom: "20px",
//     paddingRight: "240px",
//     paddingLeft: "240px",
//     backgroundColor: "#363636",
//     width: "100%",
//     marginBottom: "-15px",

//   },
//   icons: {
//     marginLeft: "30px"

//   },
//   flexbox: {
//     flexbox: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       // padding: 0,
//       // margin: 0,
//   },
// }
// }


