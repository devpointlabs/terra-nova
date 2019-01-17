import React from "react";
import { Grid, Container, Image, Segment, Icon } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../assets/images/Terra_Nova_Cabins_Logo.png";
import { Link } from "react-router-dom";
import EmailForm from './EmailForm';
import { withNamespaces } from 'react-i18next';


const Footer = ({t}) => {
  return (
    <div>
      <EmailForm />
      <Segment inverted style={styles}>
        <Container inverted>
          <Grid columns={4}>
            <Grid.Column>
              <Image src={Terra_Nova_Cabins_Logo} size="small" />
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={styles.link}>
                {t("Site Map")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Term & Conditions")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Privacy Policy")}
            </Link>
              <Link to={""} style={styles.link}>
              {t("Help")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Affiliate")}
            </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={styles.link}>
                {t("Our Location")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Career")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("About Us")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Contact Us")}
            </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to={""} style={styles.link}>
                {t("FAQS")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("News")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Photo & Video")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Restaurant")}
            </Link>
              <Link to={""} style={styles.link}>
                {t("Gift Card")}
            </Link>
          </Grid.Column>
        </Grid>
        <br />
        <hr />
        <br />
        <div style={styles.flexbox}>
          <p>
            {t("Copyright")} &copy; 2019 DevPoint Studios.
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
    </div>
  );
};

export default withNamespaces()(Footer);

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
