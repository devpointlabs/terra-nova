import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Button, Form, Segment, Checkbox } from "semantic-ui-react";
import { SubHeader, NavText } from "../styles/AppStyles";
import { withNamespaces } from 'react-i18next';


class Register extends React.Component {
  // Need to put First_name last_name, and phone
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    first_name: "",
    last_name: "",
    phone_number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      passwordConfirmation,
      first_name,
      last_name,
      phone_number
    } = this.state;
    const {
      auth: { handleRegister },
      history
    } = this.props;

    if (password === passwordConfirmation)
      handleRegister(
        {
          email,
          password,
          passwordConfirmation,
          first_name,
          last_name,
          phone_number
        },
        history
      );
    else alert("Passwords Do Not Match!");
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      first_name,
      last_name,
      phone_number
    } = this.state;

    const { t } = this.props;

    return (
      <Segment style={styles} basic>
        <SubHeader>Register New Admin</SubHeader>
        <Form onSubmit={this.handleSubmit}>
          <NavText>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label={t("First Name")}
                required
                autoFocus
                name="first_name"
                value={first_name}
                placeholder={t("First Name")}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label={t("Last Name")}
                required
                name="last_name"
                value={last_name}
                placeholder={t("Last Name")}
                onChange={this.handleChange}
              />
              <Form.Input
                label={t("Phone")}
                name="phone_number"
                value={phone_number}
                placeholder={t("Phone")}
                type="phone_number"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Input
              label={t("Email")}
              required
              name="email"
              value={email}
              placeholder={t("Email")}
              onChange={this.handleChange}
            />
            <Form.Input
              label={t("Password")}
              required
              name="password"
              value={password}
              placeholder={t("Password")}
              type="password"
              onChange={this.handleChange}
            />
            <Form.Input
              label={t("Password Confirmation")}
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              placeholder={t("Password Confirmation")}
              type="password"
              onChange={this.handleChange}
            />
            <Form.Field>
              <Checkbox label={("I agree to the Terms and Conditions")} />
            </Form.Field>
            <Segment textAlign="center" basic>
              <Button primary type="submit">
                {t("Submit")}
              </Button>
            </Segment>
          </NavText>
        </Form>
      </Segment>
    );
  }
}

export class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withNamespaces()(ConnectedRegister);

const styles = {
  marginTop: '100px'
}