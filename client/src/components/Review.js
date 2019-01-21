import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, } from 'semantic-ui-react';


const Review = () => (
    (
        <div style={styles.background}>
        <div style={styles.circle}></div>
            <div style={styles.body}>"This is the only place to stay in Catalina! I have stayed in cheaper hotels and they were fine,
                but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass
                of wine while looking out your ocean view window and then to top it all off..."
                <br />
                <h4>- JULIA ROSE</h4>
                <div style={styles.stars}>
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                </div>
                <br />
                <div>From Los Angeles, California</div>
                <br />
                <NavLink to='/reviews'>
                    <Button style={styles.button}>More Reviews</Button>
                </NavLink>
            </div>
        </div>
    )
);
export default Review;


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
    circle: {
        height: "115px",
        width: "115px",
        backgroundColor: "black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: '345px',
        marginBottom: '50px',
    },
    body: {
        color: "white",
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
    stars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'black',
    }

}
