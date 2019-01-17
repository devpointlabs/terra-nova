import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Image, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
// import ReactWeather from 'react-open-weather';
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';
import { withNamespaces } from 'react-i18next';

class Navbar extends React.Component {
  state = { user: null, };

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <div>
          <Menu.Menu position='right'>
            <Menu.Item
              style={styles.font}
              name='LOGOUT'
              onClick={() => handleLogout(this.props.history)}
            />
          </Menu.Menu>
        </div>
      )
    } else {
      return (
        <div>

          <Container>
            <Menu.Menu position='right'>
              <Link to='/login'>
                <Menu.Item
                  style={styles.font}
                  id='login'
                  name='LOGIN'
                  active={location.pathname === '/login'}
                />
              </Link>
              <Link to='/register'>
                <Menu.Item
                  style={styles.font}
                  id='register'
                  name='REGISTER'
                  active={location.pathname === '/register'}
                />
              </Link>
            </Menu.Menu>
          </Container>
        </div>
      )
    }
  }

  renderIcon = () => {
    return (
      <Menu.Item>
        <Image src={Terra_Nova_Cabins_Logo} size="small" style={styles.image} />
      </Menu.Item>
    )
  };

  render() {
    const { auth: location, t } = this.props;
    return (
      <div>
        <Container>
          <Menu position='right' secondary>
            {this.renderIcon()}
            <Link to='/'>
              <Menu.Item
                style={styles.font}
                name={t("HOME")}
                id='home'
                active={location.pathname === '/'}
              />
            </Link>
            <Link to='/rooms'>
              <Menu.Item
                name='Room & Rate'
                id='Room & Rate'
                style={styles.fontSize}
                active={location.pathname === '/rooms'}
              > {t("ROOM & RATE")}
                </Menu.Item>
            </Link>
            <Link to='/reservations'>
              <Menu.Item
                style={styles.fontSize}
                name={t("RESERVATIONS")}
                id='reservations'
                active={this.props.location.pathname === '/reservations'}
              />
            </Link>
            <Link to='/gallery'>
              <Menu.Item
                style={styles.fontSize}
                name={t("GALLERY")}
                id='gallery'
                active={this.props.location.pathname === '/gallery'}
              />
            </Link>

            {/* Not quite sure what page is for */}
            {/* <Menu.Item>
            <Dropdown style={styles.fontSize} item text='Page'>
              <Dropdown.Menu >
                <Link to={} />
                <Dropdown.Item basic>
                  Test1
               </Dropdown.Item>
                <Dropdown.Item basic>
                  <Link to={} />
                  Test2
               </Dropdown.Item>
                <Dropdown.Item basic>
                  <Link to={} />
                  Test3
               </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Menu.Item> */}

            <Link to='/about_us'>
              <Menu.Item
                style={styles.fontSize}
                name={t("ABOUT")}
                id='about'
                active={this.props.location.pathname === '/about_us'}
              />
            </Link>
            <Link to='/contact'>
              <Menu.Item
                style={styles.fontSize}
                name={t("CONTACT")}
                id='contact'
                active={this.props.location.pathname === '/contact'}
              />
            </Link>
            {this.rightNavItems()}
          </Menu>
          <br />
        </Container>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }

      </AuthConsumer>
    )
  }
}

export default withNamespaces()(withRouter(ConnectedNavbar));

export const styles = {
  font: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
  },
  fontSize: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    width: '120px',
  },
  image: {
    padding: '5px',
    margin: '5px',
  }
}
