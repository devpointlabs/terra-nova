import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

class ResCheckoutForm extends React.Component {
  state = {
    reservation: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      adults: this.props.userSpecs.adults,
      children: this.props.userSpecs.children,
      start_date: this.props.userSpecs.start_date,
      end_date: this.props.userSpecs.end_date
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      reservation: { ...this.state.reservation, [name]: value }
    });
  };

  handleSubmit = () => {
    const { id } = this.props.room;
    let roomId = parseInt(id);
    const confirm = window.confirm("Are you sure you want to checkout?");
    if (confirm)
      axios
        .post(`/api/rooms/${roomId}/reservations`, this.state.reservation)
        .then(window.confirm("Booked"));
  };

  render() {
    const {
      reservation: { first_name, last_name, phone, email }
    } = this.state;
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
            name="phone"
            placeholder="Phone #"
            value={phone}
            onChange={this.handleChange}
            required
            label="Phone"
          />
          <Form.Input
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
            required
            label="email"
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
