import React from "react";
import { Form, Grid } from "semantic-ui-react";

const EmailForm = () => (
  <Grid style = {background}>
    <Form>
      <Form.Input
        name="email"
        // label="Email"
        placeholder="Email"
      // required
      // value={title}
      />
    </Form>
  </Grid>
)

export default EmailForm;

const background = {
  paddingTop: "50px",
  paddingBottom: "50px",
  paddingRight: "240px",
  paddingLeft: "240px",
  backgroundColor: "#363636",
  width: "100%",
  marginLeft: 0
}