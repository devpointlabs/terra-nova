import React from "react";




class UnderConstruction extends React.Component {
  render() {
    return (
      <>
        <h2 style={styles.title2}> Coming Soon! </h2>
        <h1 style={styles.title}> The Adventure Begins...</h1>
        <h6 style={styles.body}> Hold tight as we get this page up and running. </h6>
      </>
    );
  }
}

export default UnderConstruction;

const styles = {
  title: {
    paddingTop: "15px",
    fontSize: "6em",
    color: "white",
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

  }
}
