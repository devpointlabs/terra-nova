import React from "react";
import { Form, Grid, Icon, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const EmailForm = () => (
  <Segment style={styles.background} basic>
    <Container style={styles.flexbox}>
      <div style={styles.flexbox}>
        {/* <Icon name="mail" size="huge" /> */}
        <Form>
          <Form.Input
            name="email"
            placeholder="Your Email Address" logo="paper plane"
          
          />
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

export default EmailForm;


const styles = {
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    margin: 0,
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