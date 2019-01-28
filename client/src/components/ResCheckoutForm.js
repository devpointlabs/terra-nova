import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { withNamespaces } from 'react-i18next';
import BraintreeDrop from './BraintreeDrop';
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
    },
    formErrors: { email: "" },
    emailValid: false,
    formValid: false,
    phoneValid: false
  };

  FormErrors = ({ formErrors }) => {
    return (
      <div className="formErrors" style={{ color: "red" }}>
        {Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={i}>
                * {fieldName} {formErrors[fieldName]}
              </p>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is not valid";
        break;
      case "phone":
        phoneValid = value.length >= 10;
        fieldValidationErrors.phone = phoneValid
          ? ""
          : " is not a valid number";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        phoneValid: phoneValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.phoneValid
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        reservation: { ...this.state.reservation, [name]: value }
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  handleSubmit = () => {
    const { id } = this.props.room;
    let roomId = parseInt(id);
    const confirm = window.confirm("Are you sure you want to checkout?");
    if (confirm)
      axios
        .post(`/api/rooms/${roomId}/reservations`, this.state.reservation)
        .then(res =>
          this.props.history.push({
            pathname: "/checkout/confirmation",
            state: { room: this.props.room, userSpecs: this.state.reservation }
          })
        );
  };

//  renderBrainTree () {
//    const {cost} = this.props;
//    return (

//      <BraintreeDrop amount={cost} />
//      )
//   }
  

  render() {
    const {
      reservation: { first_name, last_name, phone, email, }
    } = this.state;
    // const {t} = this.props;
    const {room: {cost}, t }= this.props;
    const { formErrors } = this.state;

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
        {/* {this.renderBrainTree} */}
        <BraintreeDrop {...this.state} amount={cost}/>
        <Button
          style={{ marginBottom: "7px" }}
          color="brown"
          disabled={!this.state.formValid}
        >
          {t("Reserve Room")}
        </Button>
        {this.FormErrors({ formErrors })}
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
