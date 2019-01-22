import React from 'react';
import { withNamespaces } from 'react-i18next';
import axios from 'axios';
import { NavLink,} from 'react-router-dom';
import { Container, Rating, Divider, Card, Button } from 'semantic-ui-react';
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
        const { t } = this.props;

        return (
            reviews.map(r => (
                <Card centered style={styles.MainText}>
                    <Card.Content>
                        <div style={styles.cardTop}>
                            <Card.Header>
                                Title: {r.title}
                            </Card.Header>
                            <Card.Content textAlign='right' style={styles.stars}>
                                <Rating defaultRating={r.rating} maxRating={5} disabled>

                                </Rating>
                            </Card.Content>
                        </div>
                    </Card.Content>
                    <Divider></Divider>
                    <Card.Description style={styles.cardDes}>
                        "{r.body}"
                        </Card.Description>
                    <br />
                    <Card.Content extra>
                        <Button style={styles.deleteButton}
                            onClick={(() => this.deleteReview(r.id))}>
                            Delete Review</Button>
                    </Card.Content>
                </Card>
            ))
        )
    }

    render() {
        const { t } = this.props
        return (
            <div>
                <Container>
                    <div style={styles.top}>
                        <SubHeaderTwo style={styles.hr}>Our Reviews</SubHeaderTwo>
                        <NavLink to='/reviewform'>
                            <Button style={styles.buttonTwo}>{t("Write a Review")}</Button>
                        </NavLink>
                    </div>
                    <Card.Group>
                        {this.renderReviews()}
                    </Card.Group>
                </Container>
            </div>
        )
    }
};

export default withNamespaces()(Reviews);


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
        textAlign: "center",
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
        justifyContent: 'center',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginTop: '50px',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        justifyContent: 'center',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        marginLeft: '50px',
    },
    cardDes: {
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'flex-start',
        marginLeft: '15px',
        marginRight: '15px'
    }
}