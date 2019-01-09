import React from "react";
import { Grid, Container, Image, Segment, Icon } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../images/Terra_Nova_Cabins_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  let flexbox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };

  let linkStyle = {
    color: "white",
    display: "flex",
    marginTop: "5px",
    marginBottom: "15px"
  };

  let iconStyle = {
    marginLeft: "30px"
  };

  return (
    <div>
      <Segment inverted>
        <Container inverted>
          <Grid columns={4}>
            <Grid.Column>
              <Image src={Terra_Nova_Cabins_Logo} size="small" />
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={linkStyle}>
                Sit Map
              </Link>
              <Link to={""} style={linkStyle}>
                Term & Conditions
              </Link>
              <Link to={""} style={linkStyle}>
                Privacy Policy
              </Link>
              <Link to={""} style={linkStyle}>
                Help
              </Link>
              <Link to={""} style={linkStyle}>
                Affiliate
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={linkStyle}>
                Our Location
              </Link>
              <Link to={""} style={linkStyle}>
                Carreer
              </Link>
              <Link to={""} style={linkStyle}>
                About Us
              </Link>
              <Link to={""} style={linkStyle}>
                Contact Us
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={linkStyle}>
                FAQS
              </Link>
              <Link to={""} style={linkStyle}>
                News
              </Link>
              <Link to={""} style={linkStyle}>
                Photo & Video
              </Link>
              <Link to={""} style={linkStyle}>
                Resturant
              </Link>
              <Link to={""} style={linkStyle}>
                Gift Card
              </Link>
            </Grid.Column>
          </Grid>
          <br />
          <hr />
          <br />
          <div style={flexbox}>
            <p>
              Copyright &copy; 2017 EngoCreative SkyLine Hotel Theme crafted
              with love
            </p>
            <div>
              <Icon name="paypal" size="big" />
              <Icon name="cc visa" size="big" style={iconStyle} />
              <Icon name="cc mastercard" size="big" style={iconStyle} />
              <Icon name="cc discover" size="big" style={iconStyle} />
            </div>
          </div>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
