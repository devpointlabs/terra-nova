import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Dropdown, Image, Grid, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { faCloud, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactWeather from 'react-open-weather';
import { BackgroundImage, NavText, } from '../styles/AppStyles';
import Terra_Nova_Cabins_Logo from '../images/Terra_Nova_Cabins_Logo.png';

// Need to make NavBars fluxuate between login and logout so it isn't always showing?

class Navbar extends React.Component {
  state = { user: null, };  

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Container>
          <NavText>

            <Menu.Menu position='right'>
              <Menu.Item
                style={styles.font}
                name='logout'
                onClick={() => handleLogout(this.props.history)}
              />
            </Menu.Menu>
          </NavText>
        </Container>
      )
    } else {
      return (
        <Container>
            <Menu.Menu position='right'>
              <Link to='/login'>
                <Menu.Item
                style={styles.font}
                  id='login'
                  name='login'
                  active={location.pathname === '/login'}
                />
              </Link>
              <Link to='/register'>
                <Menu.Item
                style={styles.font}
                  id='register'
                  name='register'
                  active={location.pathname === '/register'}
                />
              </Link>
            </Menu.Menu>
        </Container>
      )
    }
  }

  // Make this a toggle function instead?

  //  Will need a dollar conversion? Should the whole conversion be in one thing?

  // Need to make this work with state to change dropdown items change from false to true.
  // handleChange = (e) => {
  // Something about converting page from english to chinese
  //   const { name, value, } = e.target;
  //   this.setState({ [name]: value, });
  // }

  toggleDropdown = (e) => {
  }



  render() {
    const { auth: { user, }, location, } = this.props;

    return (
      <div >

        <Container >
          <Menu secondary style={styles.flex}>
          <Menu.Item>
        <Image src={Terra_Nova_Cabins_Logo} size="tiny" style={styles.image}/>
          </Menu.Item>
            <Link to='/'>
              <Menu.Item
                style={styles.font}
                name='home'
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
              > Room & Rate
                </Menu.Item>
            </Link>
            <Link to='/reservations'>
              <Menu.Item
                style={styles.font}
                name='reservations'
                id='reservations'
                active={this.props.location.pathname === '/reservations'}
              />
            </Link>
            <Link to='/gallery'>
              <Menu.Item
                style={styles.font}
                name='gallery'
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

            <Link to='/about'>
              <Menu.Item
                style={styles.font}
                name='about'
                id='about'
                active={this.props.location.pathname === '/about'}
              />
            </Link>
            <Link to='/contact'>
              <Menu.Item
                style={styles.font}
                name='contact'
                id='contact'
                active={this.props.location.pathname === '/contact'}
              />
            </Link>

            {/* This Toggles Logout */}
            {this.rightNavItems()}
          </Menu>
          <br />
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

export default withRouter(ConnectedNavbar);

export const styles = {
  font: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  fontSize: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    width: '115px',
  },
  image: {
    padding: '5px',
    margin: '5px',
  }
}
