import React from 'react';
import { Container, Form } from 'semantic-ui-react';

class CareerForm extends React.Component {
    state = { first_name: "", last_name: "", phone_number: "", email: ""};

    render() {
        const { first_name, last_name, phone_number, email } = this.state;
        return(
            <Container>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group width="equal">
                        <Form.Input
                            name="first_name"
                            label="First Name"
                            placeholder="First Name"
                            required
                            value={first_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            name="last_name"
                            label="Last Name"
                            placeholder="Last Name"
                            required
                            value={last_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name="phone_number"
                            label="Phone Number"
                            placeholder="Phone Number"
                            required
                            value={phone_number}
                            onChange={this.handleChange}
                        />
                         <Form.Input
                            name="email"
                            label="Email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        )
    }

};//end of CareerForm

export default CareerForm;