import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Dropdown, Image, Grid, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { faCloud, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactWeather from 'react-open-weather';
import { BackgroundImage } from '../styles/AppStyles';

// Need to make NavBars fluxuate between login and logout so it isn't always showing?

class Navbar extends React.Component {
  state = { user: null, };

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Container>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={() => handleLogout(this.props.history)}
            />
          </Menu.Menu>
        </Container>
      )
    } else {
      return (
        <Container>
          <Menu.Menu position='right'>
            <Link to='/login'>
              <Menu.Item
                id='login'
                name='login'
                active={location.pathname === '/login'}
              />
            </Link>
            <Link to='/register'>
              <Menu.Item
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
      <div>

        <BackgroundImage ></BackgroundImage>
        <Container>
          <Menu secondary size='mini'>
            <Menu.Item>
              {/* <FontAwesomeIcon
              icon={faCloud}
              style={{
                width: '20px'
              }} />
            32˚F */}
              <ReactWeather
                forecast="today"
                apikey="4ad4c95bd36f481697d185313191001"
                type="city"
                city="Seattle" />
              {/* Weather API DOCS
              {/* https://www.apixu.com/my/ */}
            </Menu.Item>

            <Menu.Item>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{
                  width: '15px'
                }}
              />
              Salt Lake City, UT
        </Menu.Item>

            <Menu.Item>
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  width: '20px'
                }} />
              1-TER-RAN-OVVA
          </Menu.Item>
            <Menu.Item position='right'>
              {user ?
                <Menu.Item>
                  <i>
                    Welcome, {user.first_name}
                  </i>
                </Menu.Item>
                :
                null
              }
              <Dropdown item text='$ (USD)'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.handleChange}>
                    ¥ (CYN)
              </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text='ENG'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.handleChange}>
                    ROC
              </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>

          <Menu pointing secondary>
            <Link to='/'>
              <Menu.Item
                name='home'
                id='home'
                active={location.pathname === '/'}
              />
            </Link>
            <Link to='/rooms'>
              <Menu.Item
                name='Room & Rate'
                id='Room & Rate'
                style={{
                  width: '114px'
                }}
                active={location.pathname === '/rooms'}
              >Room & Rate</Menu.Item>
            </Link>
            <Link to='/reservations'>
              <Menu.Item
                name='reservations'
                id='reservations'
                active={this.props.location.pathname === '/reservations'}
              />
            </Link>
            <Link to='/gallery'>
              <Menu.Item
                name='gallery'
                id='gallery'
                active={this.props.location.pathname === '/gallery'}
              />
              </Link>

           {/* Not quite sure what page is for */}
           <Dropdown item text='Page'>
           <Dropdown.Menu>
             {/* <Link to={} /> */}
             <Dropdown.Item>
                 Test1
               </Dropdown.Item>
             <Dropdown.Item>
             {/* <Link to={} /> */}
                 Test2
               </Dropdown.Item>
             <Dropdown.Item>
             {/* <Link to={} /> */}
                 Test3
               </Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>
          

            <Link to='/about'>
              <Menu.Item
                name='about'
                id='about'
                active={this.props.location.pathname === '/about'}
              />
            </Link>
            <Link to='/contact'>
              <Menu.Item
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