import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { withNamespaces } from 'react-i18next';
// import BraintreeDrop from './BraintreeDrop';
// import ResModal from "./ResModal";

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
        .then(res =>
          // window.confirm("Booked"),
          this.props.history.push({
            pathname: "/checkout/confirmation",
            state: { room: this.props.room, userSpecs: this.state.reservation }
          })
        );
  };

  render() {
    const {
      reservation: { first_name, last_name, phone, email }
    } = this.state;
    const { t} = this.props

    return (
      <Form onSubmit={this.handleSubmit} style={styles.flex}>
        <Form.Group>
          <Form.Input
            name="first_name"
            placeholder={t("First Name")}
            value={first_name}
            onChange={this.handleChange}
            label={t("First Name")}
            required
          />
          <Form.Input
            name="last_name"
            placeholder={t("Last Name")}
            value={last_name}
            onChange={this.handleChange}
            label={t("Last Name")}
            required
          />
          <Form.Input
            name="phone"
            placeholder={t("Phone Number")}
            value={phone}
            onChange={this.handleChange}
            required
            label={t("Phone Number")}
          />
          <Form.Input
            name="email"
            placeholder={t("Email")}
            value={email}
            onChange={this.handleChange}
            required
            label={t("Email")}
          />
        </Form.Group>
        <Button color="brown">{t("Reserve Room")}</Button>
      </Form>
    );
  }
}

export default withNamespaces()(ResCheckoutForm);

const styles = {
  flex: {
    marginTop: "3em",
    marginBottom: "3em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
