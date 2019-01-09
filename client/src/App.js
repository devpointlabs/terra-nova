import React, { Fragment } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

let body = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
};

let footer = {
  margin: "auto auto 0 auto"
};

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container style={body}>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      <Footer style={footer} />
    </FetchUser>
  </Fragment>
);

export default App;
