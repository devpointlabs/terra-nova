import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, } from 'semantic-ui-react';
import { Carousel, } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';


const Review = ({t}) => (
    <Carousel
        prevIcon={null}
        prevLabel={null}
        nextIcon={null}
        nextLabel={null}
        controls={false}
        stackable
        
    >
        <Carousel.Item stackable>
            <div style={styles.background}>
                <div style={styles.circle}></div>
                <div style={styles.stars}>
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                </div>
                <br />
                <div style={styles.body}>
                    {t("This is the only place to stay in Catalina! I have stayed in cheaper hotels and they were fine,")}

                        {t("but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass")}
                        
                        {t("of wine while looking out your ocean view window and then to top it all off...")}
                <br />
                    <h3 style={styles.name}>JULIA ROSE</h3>
                    <div style={styles.from}>From Los Angeles, California</div>
                    <br />
                    <NavLink style={styles.link} to='/reviews'>
                        <Button style={styles.button}>{t("More Reviews")}</Button>
                    </NavLink>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item stackable>
            <div style={styles.background}>
                <div style={styles.circle}></div>
                <div style={styles.stars}>
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                </div>
                <br />
                <div style={styles.body}>
                    {t("When I first decided to visit Yellowstone I was completely overwhelmed with the choices of hotels.")}

                     {t("I'm so glad we chose Terra Nova as our stay in Yellowstone. The staff was kind, punctual and we didn't have")}

                    {t("to worry about anything but our trip. I can't wait for our next...")}
                <br />
                    <h3 style={styles.name}>JON CARSON</h3>
                    <div style={styles.from}>From Seattle, Washington</div>
                    <br />
                    <NavLink style={styles.link} to='/reviews'>
                        <Button style={styles.button}>{t("More Reviews")}</Button>
                    </NavLink>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item stackable>
            <div style={styles.background}>
                <div style={styles.circle}></div>
                <div style={styles.stars}>
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                    <Icon name='star' />
                </div>
                <br />
                <div style={styles.body}>
                    {t("Don't even bother with other hotels. For the price you get at other places, you'd expect a cheap motel, with a cheap environment. With Terra Nova")}
                    
                    {t("Cabins, it felt like we were coming home to our very own cabin.")}
                    
                    {t("One thing I would suggest is...")}
                <br />
                    <h3 style={styles.name}>ALEX WINIZTKY</h3>
                    <div style={styles.from}>From Salt Lake City, Utah</div>
                    <br />
                    <NavLink style={styles.link} to='/reviews'>
                        <Button style={styles.button}>{t("More Reviews")}</Button>
                    </NavLink>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>

);
export default withNamespaces()(Review);


const styles = {
    background: {
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingRight: "240px",
        paddingLeft: "240px",
        backgroundColor: "#555555",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    body: {
        color: "white",
        fontSize: "16px",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'lighter',
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
        marginBottom: '10px',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
    },
    name: {
        fontSize: '18px',
    },
    from: {
        fontSize: '13px',
        marginTop: '-15px',
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

}
