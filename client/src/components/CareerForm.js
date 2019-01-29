import React from 'react';
import { Container, Form } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';


class CareerForm extends React.Component {
    state = { first_name: "", last_name: "", phone_number: "", email: ""};

    render() {
        const { first_name, last_name, phone_number, email } = this.state;
        const { t } = this.props;

        return(
            <Container style={styles}>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group width="equal">
                        <Form.Input
                            name="first_name"
                            label={t("First Name")}
                            placeholder={t("First Name")}
                            required
                            value={first_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            name="last_name"
                            label={t("Last Name")}
                            placeholder={t("Last Name")}
                            required
                            value={last_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name="phone_number"
                            label={t("Phone Number")}
                            placeholder={t("Phone Number")}
                            required
                            value={phone_number}
                            onChange={this.handleChange}
                        />
                         <Form.Input
                            name="email"
                            label={t("Email")}
                            placeholder={t("Email")}
                            required
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button>{t("Submit")}</Form.Button>
                </Form>
            </Container>
        )
    }

};//end of CareerForm

export default withNamespaces()(CareerForm);

const styles = {
    marginTop: '100px',
}