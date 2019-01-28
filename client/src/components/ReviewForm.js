import React from 'react';
import axios from 'axios';
import { Form, Rating, Container, Button } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider';
import { withNamespaces } from 'react-i18next';
import { withRouter, NavLink} from 'react-router-dom';
import { SubHeaderTwo } from '../styles/AppStyles';

class ReviewForm extends React.Component {
    state = {  title: "", body: "", rating: 0, first_name: "", last_name: "", location: "",  };
    // can we get the user name from the user_id??

    handleSubmit = (e) => { 
        e.preventDefault();
        const review = {...this.state};
        axios.post('/api/reviews', review)
            .then(res => this.props.history.push('/reviews'))
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleRating = (e, { rating }) => {
        this.setState({ rating });
    };

    render() {
        const { title, body, rating, first_name, last_name, location, } = this.state;
        const { t } = this.props;
        return (
            <Container style={styles.background}>
                <Form style={styles.text}
                    onSubmit={this.handleSubmit}>
                    <div style={styles.top}>
                    <SubHeaderTwo style={styles.header}>{t("Leave a Review")}</SubHeaderTwo>
                    <NavLink to="/reviews">
                        <Button style={styles.button}>{t("Back to Reviews")}</Button>
                    </NavLink>
                    </div>
                    <Form.Group style={styles.topForm}> 
                    <Form.Input
                        name="first_name"
                        label={t("First Name")}
                        placeholder={t("First Name")}
                        autofocus
                        required
                        value={first_name}
                        width='4'
                        onChange={this.handleChange}
                        /> 
                    <Form.Input
                        name="last_name"
                        label={t("Last Name")}
                        placeholder={t("Last Name")}
                        required
                        value={last_name}
                        width='4'
                        onChange={this.handleChange}
                        /> 
                    <Form.Input
                        name="location"
                        label={t("City & State")}
                        placeholder={t("City & State")}
                        required
                        value={location}
                        width='4'
                        onChange={this.handleChange}
                        /> 
                        </Form.Group>
                    <div style={styles.rating}>
                    <Form.Input
                        name="title"
                        label={t("Title")}
                        placeholder={t("Title")}
                        required
                        value={title}
                        width='5'
                        onChange={this.handleChange}
                        /> 
                        <div style={styles.stars}>
                          
                        <Rating
                            name="rating"
                            maxRating={5}
                            rating={rating}
                            onRate={this.handleRating}
                            size="huge"
                            clearable
                            />
                            </div>
                            </div>
                    <Form.Input
                        name="body"
                        label={t("Body")}
                        placeholder={t("Body")}
                        required
                        control='textArea'
                        value={body}
                        onChange={this.handleChange}
                    />
                    <Form.Button style={styles.button}>{t("Submit")}</Form.Button>
                </Form>
            </Container>
        )
    }
};


class ConnectedReviewForm extends React.Component {
    render(){
      return(
        <AuthConsumer>
          { auth => <ReviewForm {...this.props} auth={auth} /> }
        </AuthConsumer>
      )
    }
};

export default withNamespaces()(withRouter(ConnectedReviewForm));

const styles = {
    text: {
        fontFamily: "'Playfair Display', serif",
    },
    button: {
        backgroundColor: '#555555',
        border: '2px solid #f8f8ff',
        color: 'white',
        padding: '10px 40px',
        textAlign: "center",
        textDecoration: 'none',
        display: 'flex',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginTop: '10px',
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    stars: {
        marginLeft: '30px',
    },
    header: {
        marginRight: '500px',
        paddingBottom: '10px',
        borderBottom: '1px solid black',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        marginTop: '25px',
    },
    topForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    background: {
        marginTop: '150px'
    }
}
