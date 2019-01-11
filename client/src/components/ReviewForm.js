import React from 'react';
import axios from 'axios';
import { Form, Rating } from 'semantic-ui-react';

class ReviewForm extends React.Component {
    state = { title:"", body:"", rating: 0 };
    // can we get the user name from the user_id??

    handleSubmit = (e) => {
        e.preventDefault();
        if (reservation_id) {
            axios.put(`/api/reservations/${id}/reviews/${reviewId}`, {...this.state})
                .then(res => push(`/reservations/${id}`))
        } else {
            axios.post(`/api/reservations/${id}/reviews`, {...this.state})
                .then( res=> push(`/reservation/${id}`)
                )
        }
    };//end of handleSubmit

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };//end of handleChange

    handleRating = (e, { rating }) => {
        this.setState({ rating });
    };//end of handleRating

    render() {
        const { title, body, rating } = this.state
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
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
            </div>
        )
    }
};

export default ReviewForm;