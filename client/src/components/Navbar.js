import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Container, Image, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
// import ReactWeather from 'react-open-weather';
import Terra_Nova_Cabins_Logo from "../assets/images/Terra_Nova_Cabins_Logo.png";
import { withNamespaces } from "react-i18next";

class Navbar extends React.Component {
  state = { user: null };

  renderIcon = () => {
    return (
      <Menu.Item position="left">
      <Link to='/'>
        <Image
          src={Terra_Nova_Cabins_Logo}
          size="tiny"
          style={styles.image}
          position="left"
          floated="left"
          verticalAlign="top"
          />
          </Link>
      </Menu.Item>
    );
  };

  adminNav = () => {
    const {
      auth: { user, handleLogout },
      t
    } = this.props;

    return (
      <Dropdown.Menu style={styles.font} position="right">
        {user ? (
          <div style={styles.background}>
            <Dropdown item style={styles.font} text={t("Welcome")}>
              <Link to="/register">
                <Dropdown.Item
                  style={styles.font}
                  position="right"
                  text={t("NEW ADMIN")}
                />
              </Link>
              <Dropdown.Item
                href="/events"
                style={styles.font}
                text={t("NEW EVENT")}
              />
              <Dropdown.Item
                style={styles.font}
                text={t("LOGOUT")}
                onClick={() => handleLogout(this.props.history)}
              />
            </Dropdown>
          </div>
        ) : null}
      </Dropdown.Menu>
    );
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    const { location, t } = this.props;

    return (
      <div style={styles.background}>
        <Container>
          <Menu position="center" secondary>
            {this.renderIcon()}
            <Link to="/">
              <Menu.Item
                style={styles.font}
                name={t("HOME")}
                id="home"
                active={location.pathname === "/"}
              />
            </Link>
            <Link to="/rooms">
              <Menu.Item
                name="Room & Rate"
                id="Room & Rate"
                style={styles.font}
                active={location.pathname === "/rooms"}
              >
                {" "}
                {t("ROOM & RATE")}
              </Menu.Item>
            </Link>
            <Link to="/reservations" onClick={this.handleRefresh}>
              <Menu.Item
                style={styles.font}
                name={t("RESERVATIONS")}
                id="reservations"
                active={this.props.location.pathname === "/reservations"}
              />
            </Link>
            <Link to="/gallery">
              <Menu.Item
                style={styles.font}
                name={t("GALLERY")}
                id="gallery"
                active={this.props.location.pathname === "/gallery"}
              />
            </Link>
            <Link to="/about_us">
              <Menu.Item
                style={styles.font}
                name={t("ABOUT")}
                id="about"
                active={this.props.location.pathname === "/about_us"}
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                style={styles.font}
                name={t("CONTACT")}
                id="contact"
                active={this.props.location.pathname === "/contact"}
              />
            </Link>
            {this.adminNav()}
          </Menu>
          <br />
        </Container>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withNamespaces()(withRouter(ConnectedNavbar));

export const styles = {
  font: {
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    marginTop: "35px"
  },
  image: {
    padding: "0.5px",
    marginBottom: "-40px",
    marginTop: "-10px",
    height: "100px",
    width: "auto"
  },
  background: {
    backgroundColor: "rgb(35, 35, 35)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center"
    // padding: '0px'
  }
};
