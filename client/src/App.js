import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Geobar from "./components/Geobar";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ReviewForm from "./components/ReviewForm";
import Careers from "./components/Careers";
import CareerForm from "./components/CareerForm";
import Events from "./components/Events";
import Rooms from "./components/Rooms";
import News from "./components/News";
import Reviews from "./components/Reviews";
import ResCheckout from "./components/ResCheckout";
import CheckoutConfirm from "./components/CheckoutConfirm";
import UnderConstruction from "./components/UnderConstruction";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Fragment>
    <FetchUser>
      <Geobar />
      <Navbar />
      <ScrollToTop>
        <div style={styles.body}>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="admin/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <ProtectedRoute exact path="/register" component={Register} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/about_us" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/reservations" component={Reservations} />
            <Route exact path="/checkout" component={ResCheckout} />
            <Route
              exact
              path="/checkout/confirmation"
              component={CheckoutConfirm}
            />
            <Route exact path="/events" component={Events} />
            <Route exact path="/news" component={News} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/rooms" component={Rooms} />
            <ProtectedRoute path="/careerapply" component={CareerForm} />
            <Route path="/reviewform" component={ReviewForm} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/underconstruction" component={UnderConstruction} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </ScrollToTop>
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
