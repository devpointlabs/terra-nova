import React from "react";
import { Form, Grid, Icon } from "semantic-ui-react";

const EmailForm = () => (
  <Grid style={styles.background} columns={2}>
    <Grid.Column>
      <Icon name="mail" size="huge" />
      <Form>
        <Form.Input
          name="email"
          // label="Email"
          placeholder="Your Email Address"
        // required
        // value={title}
        />
      </Form>
    </Grid.Column>
    <Grid.Column>

    </Grid.Column>
  </Grid>

)

export default EmailForm;

// const background = {
//   paddingTop: "25px",
//   paddingBottom: "25px",
//   paddingRight: "240px",
//   paddingLeft: "240px",
//   backgroundColor: "#363636",
//   width: "100%",
//   marginLeft: 0
// }

const styles = {
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  // link: {
  //   color: "white",
  //   display: "flex",
  //   marginTop: "5px",
  //   marginBottom: "15px"
  // },
  // icon: {
  //   marginLeft: "30px"
  // },
  background: {
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingRight: "240px",
    paddingLeft: "240px",
    backgroundColor: "#363636",
    width: "100%",
    marginLeft: 0
  }
};