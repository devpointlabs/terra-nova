import React from "react";
import LPI4 from "../assets/images/LandingPage/LPI4.jpg";
import { withNamespaces } from 'react-i18next';


class UnderConstruction extends React.Component {
  render() {
  const { t } = this.props;
    return (
      <div style={styles.background}>
        <h2 style={styles.title2}> {t("Coming Soon")}! </h2>
        <h1 style={styles.title}> {t("The Adventure Begins")}...</h1>
        <h6 style={styles.body}> {t("Hold tight as we get this page up and running")}. </h6>
      </div>
    );
  }
}

export default withNamespaces()(UnderConstruction);

const styles = {
  title: {
    paddingTop: "15px",
    fontSize: "5em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "300",
    textShadow: "0.5px 0.5px #000000",
    textAlign: "center"
  },
  title2: {
    paddingTop: "150px",
    fontSize: "2.5em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "300",
    textAlign: "center"
  },
  body: {
    paddingTop: "15px",
    fontSize: "1.5em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "300",
    // textShadow: "0.5px 0.5px #000000",
    textAlign: "center",
  },
    background: {
      backgroundImage: "grey",
      minHeight: "100%",
      minWidth: "100%",
    }
}
