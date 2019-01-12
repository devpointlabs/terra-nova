import React from 'react';
import { BlackButton } from '../styles/AppStyles';


class Reviews extends React.Component {
    state = { Reviews: {} };

    render() {
        return (
            <div style={styles.background}>
                <div style={styles.body}>"This is the only place to stay in Catalina! I have stayed in cheaper hotels and they were fine, 
                    but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass 
                    of wine while looking out your ocean view window and then to top it all of..."
                <br />
                <h4>JULIA ROSE</h4>
                <div>From Los Angeles, California</div>
                <br />
                <BlackButton>Write a Review</BlackButton>
                </div>
            </div>
        )
    }
};

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
    body: {
        color: "white",
        fontSize: "16px",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
    }
}
export default Reviews;
