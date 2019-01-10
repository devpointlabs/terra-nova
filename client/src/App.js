import React, { Fragment } from "react";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
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


const App = () => (
  <Fragment>
    <FetchUser>
      <Container style={styles.body}>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reservations" component={Reservations} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
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
