import React, { Fragment } from "react";
import { Image, } from 'semantic-ui-react';
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Rooms from "./components/Rooms";
// import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { BackgroundImage } from './styles/AppStyles';
import "./App.css";
import Geobar from "./components/Geobar";

const App = () => (
  <Fragment>
    <FetchUser>
        <BackgroundImage style={imageStyles.size}>
      <div>

        <Geobar />
        <Navbar />
<div style={styles.body}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/rooms" component={Rooms} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/reservations" component={Reservations} />
          <Route component={NoMatch} />

        </Switch>
      </div>
        </BackgroundImage>
      <Footer style={styles.footer} />
    </FetchUser>
  </Fragment>
);

export default App;

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  footer: {
    margin: "auto auto 0 auto"
  }
};

const imageStyles = {
  size: {
      backgroundPosition: 'center top',
      backgroundSize: '100% 50%',
      // width: '1500px',
      // height: '20%',
      // display: 'flex',
      // flex: '1',
      // resizeMode: 'cover',

  }
};
