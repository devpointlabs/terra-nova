import React from "react";
// import LPI4 from "../assets/images/LandingPage/LPI4.jpg";
import { withNamespaces } from 'react-i18next';
import Yellowstone from '../assets/images/Yellowstone.png';



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
    textShadow: "0.5px 0.5px white",
    textAlign: "center"
  },
  title2: {
    paddingTop: "100px",
    fontSize: "3em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "300",
    textAlign: "center",
    textShadow: "0.5px 0.5px white",
  },
  body: {
    paddingTop: "15px",
    fontSize: "2em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "400",
    // textShadow: "0.5px 0.5px #000000",
    textAlign: "center",
  
  },
    background: {
      backgroundImage: "url(" + Yellowstone + ")",
      minHeight: "100vh",
      minWidth: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      marginTop: '130px',
      // backgrounColor: "black",
      // backgroundBlendMode: "screen",
      // opacity: "0.2",
      // filter: "blur(8px)"
    }
}
