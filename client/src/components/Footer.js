import React from "react";
import { Grid, Container, Image, Segment, Icon } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../assets/images/Terra_Nova_Cabins_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Segment inverted style={styles}>
      <Container inverted>
        <Grid columns={4}>
          <Grid.Column>
            <Image src={Terra_Nova_Cabins_Logo} size="small" />
          </Grid.Column>
          <Grid.Column>
            <Link to={""} style={styles.link}>
              Site Map
            </Link>
            <Link to={""} style={styles.link}>
              Term & Conditions
            </Link>
            <Link to={""} style={styles.link}>
              Privacy Policy
            </Link>
            <Link to={""} style={styles.link}>
              Help
            </Link>
            <Link to={""} style={styles.link}>
              Affiliate
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={""} style={styles.link}>
              Our Location
            </Link>
            <Link to={""} style={styles.link}>
              Career
            </Link>
            <Link to={""} style={styles.link}>
              About Us
            </Link>
            <Link to={""} style={styles.link}>
              Contact Us
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={""} style={styles.link}>
              FAQS
            </Link>
            <Link to={""} style={styles.link}>
              News
            </Link>
            <Link to={""} style={styles.link}>
              Photo & Video
            </Link>
            <Link to={""} style={styles.link}>
              Restaurant
            </Link>
            <Link to={""} style={styles.link}>
              Gift Card
            </Link>
          </Grid.Column>
        </Grid>
        <br />
        <hr />
        <br />
        <div style={styles.flexbox}>
          <p>
            Copyright &copy; 2019 DevPoint Studios.
            {/* not sure this copyright should be here */}
          </p>
          <div>
            <Icon name="paypal" size="big" />
            <Icon name="cc visa" size="big" style={styles.icon} />
            <Icon name="cc mastercard" size="big" style={styles.icon} />
            <Icon name="cc discover" size="big" style={styles.icon} />
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;

const styles = {
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  link: {
    color: "white",
    display: "flex",
    marginTop: "5px",
    marginBottom: "15px"
  },
  icon: {
    marginLeft: "30px"
  }
};
