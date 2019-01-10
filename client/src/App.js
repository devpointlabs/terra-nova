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
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { BackgroundImage } from './styles/AppStyles';
import "./App.css";


const App = () => (
  <Fragment>
    <FetchUser>

      <BackgroundImage>
      <Navbar />
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
      </BackgroundImage>
    </FetchUser>
    <Footer />
  </Fragment>
);

export default App;
