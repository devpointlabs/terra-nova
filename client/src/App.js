import React, { Fragment } from "react";
import { Image, } from 'semantic-ui-react';
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Rooms from "./components/Rooms";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import GrandCanyonoftheYellowstone from './images/GrandCanyonoftheYellowstone.png';
import "./App.css";


const App = () => (
  <Fragment>
    <FetchUser>
      <Navbar />
      <Container>
        <Image src={GrandCanyonoftheYellowstone} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/reservations" component={Reservations} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
    <Footer />
  </Fragment>
);

export default App;
