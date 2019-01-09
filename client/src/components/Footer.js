import React from "react";
import { Grid, Container, Image, Segment } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../images/Terra_Nova_Cabins_Logo.png";

const Footer = () => {
  let styles = {
    position: "absolute",
    bottom: "0",
    width: "100%"
  };

  return (
    <Segment inverted style={styles}>
      <Container inverted>
        <Grid columns={4}>
          <Grid.Column>
            <Image src={Terra_Nova_Cabins_Logo} size="small" />
          </Grid.Column>
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
        <hr />
        <br />
        <p>
          Copyright &copy; 2017 EngoCreative SkyLin Hotel Theme crafted with love
        </p>
      </Container>
    </Segment>
  );
};

export default Footer;
