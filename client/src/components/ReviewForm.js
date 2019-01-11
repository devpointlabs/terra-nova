import React from 'react';
import axios from 'axios';
import { Form, Rating, Container, Header } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider';

class ReviewForm extends React.Component {
    state = { title:"", body:"", rating: 0 , user_id: ""};
    // can we get the user name from the user_id??

    componentDidMount() {
        this.setState({ user_id: this.props.auth.user.id })
    };//end of componentDidMount
    
    handleSubmit = (e) => {
        const review = this.state;
        e.preventDefault();
        axios.post(`/api/review/${this.props.match.params.id}`, review)
          .then( res => this.props.history.push(`/review/${this.props.match.params.id}`))
    };//end of handleSubmit

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };//end of handleChange

    handleRating = (e, { rating }) => {
        this.setState({ rating });
    };//end of handleRating

    render() {
        const { title, body, rating } = this.state;
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                <Header>Leave a Review</Header>
                    <Form.Group width="equal">
                        <Form.Input
                            name="title"
                            label="Title"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            name="body"
                            label="Body"
                            placeholder="Body"
                            required
                            value={body}
                            onChange={this.handleChange}
                        />
                        <Rating
                            name="rating"
                            icon="star"
                            maxRating={5}
                            rating={rating}
                            onRate={this.handleRating}
                            size="huge"
                            clearable
                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        )
    }
};

export default class ConnectedReviewForm extends React.Component {
    render(){
      return(
        <AuthConsumer>
          { auth => <ReviewForm {...this.props} auth={auth} /> }
        </AuthConsumer>
      )
    }
};