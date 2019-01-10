import React, { Fragment } from "react";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <Fragment>
    <FetchUser>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reservations" component={Reservations} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </FetchUser>
    <Footer />
  </Fragment>
);

export default App;
