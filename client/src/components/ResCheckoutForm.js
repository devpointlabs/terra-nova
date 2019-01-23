import React from "react";
import { Form, Button } from "semantic-ui-react";

class ResCheckoutForm extends React.Component {
  state = { first_name: "", last_name: "", phone_number: "" };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const confirm = window.confirm("Are you sure you want to checkout?");
    if (confirm) alert("Booked!");
  };

  render() {
    const { first_name, last_name, phone_number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} style={styles.flex}>
        <Form.Group>
          <Form.Input
            name="first_name"
            placeholder="First Name"
            value={first_name}
            onChange={this.handleChange}
            label="First Name"
            required
          />
          <Form.Input
            name="last_name"
            placeholder="Last Name"
            value={last_name}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
          <Form.Input
            name="phone_number"
            placeholder="Phone #"
            value={phone_number}
            onChange={this.handleChange}
            required
            label="Phone"
          />
        </Form.Group>
        <Button color="brown">Checkout Room</Button>
      </Form>
    );
  }
}

export default ResCheckoutForm;

const styles = {
  flex: {
    marginTop: "3em",
    marginBottom: "3em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
