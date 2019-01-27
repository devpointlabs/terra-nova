import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, } from 'semantic-ui-react';
import { SubHeader, NavText } from '../styles/AppStyles';
import { withNamespaces } from 'react-i18next';


class Admin extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
    const { t } = this.props;

    return (
      <Segment basic>
        <SubHeader>{t("Admin")}</SubHeader>
        <NavText>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label={t("Email")}
            autoFocus
            required         
            name='email'
            value={email}
            placeholder={t("Email")}
            onChange={this.handleChange}
            />
          <Form.Input
            label={t("Password")}
            required
            name='password'
            value={password}
            placeholder={t("Password")}
            type='password'
            onChange={this.handleChange}
            />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>{t("Submit")}</Button>
          </Segment>
        </Form>
            </NavText>
      </Segment>
    )
  }
}


const ConnectedAdmin = (props) => (
      <AuthConsumer>
      { auth => 
      <Admin {...props} auth={auth} />
      }
      </AuthConsumer>
  )


export default withNamespaces()(ConnectedAdmin);