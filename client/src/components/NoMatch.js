import React from 'react';
import { Link, } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

const NoMatch = ({ t }) => (
  // <Header as="h1" textAlign="center">
  //   {t("Page not found return")}
  // </Header>
  <div style={styles.backgroun}>
    <h2 style={styles.title2}>Page not found</h2>
     <h1 style={styles.body}> Return
    <Link to="/" styles={styles.body}> {t("Home")}.</Link>
    </h1>
  </div>
)

export default withNamespaces()(NoMatch);

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
    paddingTop: "100px",
    fontSize: "3em",
    // color: "white",
    fontFamily: "'Playfair Display', serif !important",
    fontWeight: "300",
    textAlign: "center"
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

}
