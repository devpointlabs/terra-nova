import React from 'react';
import axios from 'axios';
import { NavLink, Link, } from 'react-router-dom';
import { Container, Rating, Segment, Button, Header, Icon } from 'semantic-ui-react';
import { SubHeaderTwo, } from '../styles/AppStyles';

class Reviews extends React.Component {
    state = { reviews: [] };

    componentDidMount() {
        axios.get("/api/reviews")
            .then(res => {
                this.setState({ reviews: res.data })
            })
    };

    deleteReview = (id) => {
        axios.delete(`/api/reviews/${id}`)
            .then(res => {
                const { reviews } = this.state;
                this.setState({ reviews: reviews.filter(r => r.id !== id) })
            })
    }


    renderReviews = () => {
        const { reviews } = this.state;
        return (
            reviews.map(r => (
                <div>
                    <Segment
                        centered
                        style={styles.mainText}
                        raised
                        >
                        <div style={styles.cardTop}>
                            <Header>
                        <Icon 
                        name='user circle' 
                        size='small' 
                        />
                                {r.name}
                            </Header>
                            <div textAlign='right' style={styles.stars}>
                                <Rating defaultRating={r.rating} maxRating={5} disabled>
                                </Rating>
                            </div>
                        </div>
                        <p style={styles.location}>
                            From {r.location}
                        </p>
                        <Header as='h3' style={styles.title}>
                            {r.title}
                        </Header>
                        <div style={styles.description}>
                            "{r.body}"
                        </div>
                        <br />
                        <Button
                            style={styles.deleteButton}
                            onClick={(() => this.deleteReview(r.id))}>
                            Delete Review
                        </Button>
                    </Segment>
                    <br />
                </div>
            ))
        )
    }

    render() {
        return (
            <div>
                <Container>
                    <div style={styles.top}>
                        <SubHeaderTwo style={styles.hr}>Our Reviews</SubHeaderTwo>
                        <NavLink to='/reviewform'>
                            <Button style={styles.buttonTwo}>Write a Review</Button>
                        </NavLink>
                    </div>
                    <div>
                        {this.renderReviews()}
                    </div>
                </Container>
            </div>
        )
    }
};

export default Reviews;


const styles = {
    background: {
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingRight: "240px",
        paddingLeft: "240px",
        backgroundColor: "#555555",
        width: "100%",
        marginLeft: 0
    },
    mainText: {
        color: "black",
        fontSize: "16px",
        // textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
    },
    button: {
        backgroundColor: '#555555',
        border: '2px solid #f8f8ff',
        color: 'white',
        padding: '10px 40px',
        textAlign: "center",
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginTop: '10px',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '50px',
    },
    buttonTwo: {
        backgroundColor: '#555555',
        border: '2px solid #f8f8ff',
        color: 'white',
        padding: '10px 40px',
        textAlign: "center",
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        justif: 'center',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginTop: '50px',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        justif: 'flex-end',
        color: 'black',
    },
    hr: {
        borderBottom: '1px solid black',
    },
    cardTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    deleteButton: {
        backgroundColor: '#555555',
        border: '2px solid #f8f8ff',
        color: 'white',
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        // marginLeft: '50px',
    },
    description: {
        fontWeight: '100',
    },
    location: {
        color: 'grey',
    },
    icon: {
        // paddingRight: '10px',
    }
}