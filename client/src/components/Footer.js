import React from "react";
import { Grid, Container, Image, Segment, Icon } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../images/Terra_Nova_Cabins_Logo.png";

const Footer = () => {
  let styles = {
    position: "absolute",
    bottom: "0",
    width: "100%"
  };

  let flexbox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };

  return (
    <Segment inverted style={styles}>
      <Container inverted>
        <Grid columns={4}>
          <Grid.Column>
            <Image src={Terra_Nova_Cabins_Logo} size="small" />
          </Grid.Column>
          {/* Will convert to links when routes are ready */}
          <Grid.Column>
            <p>Sit Map</p>
            <p>Term & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Affiliate</p>
          </Grid.Column>
          <Grid.Column>
            <p>Our Location</p>
            <p>Carreer</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </Grid.Column>
          <Grid.Column>
            <p>FAQS</p>
            <p>News</p>
            <p>Photo & Video</p>
            <p>Resturant</p>
            <p>Gift Card</p>
          </Grid.Column>
        </Grid>
        <br />
        <hr />
        <br />
        <div style={flexbox}>
          <p>
            Copyright &copy; 2017 EngoCreative SkyLine Hotel Theme crafted with
            love
          </p>
          <div>
            <Icon name="paypal" size="large" />
            <Icon name="cc visa" size="large" />
            <Icon name="cc mastercard" size="large" />
            <Icon name="cc discover" size="large" />
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
