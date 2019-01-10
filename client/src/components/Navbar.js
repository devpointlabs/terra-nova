import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Dropdown, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { faCloud, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {

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
            <Menu.Item>
              USD
            </Menu.Item>Ï
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

  render() {
    const { auth: location } = this.props;
    return (
      <Container>
        
        <Menu secondary size='mini'>
          <Menu.Item>
            <FontAwesomeIcon
              icon={faCloud}
              style={{
                width: '20px'
              }} />
            32˚F
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
            1-800-888-8888
          </Menu.Item>
          <Menu.Item position='right'>
              <Dropdown item text='USD'>
              <Dropdown.Item>
                CND
              </Dropdown.Item>
              </Dropdown>
          </Menu.Item>
          <Menu.Item position='right'>
              <Dropdown item text='ENG'>
              <Dropdown.Item>
                CHN
              </Dropdown.Item>
              </Dropdown>
          </Menu.Item>
        </Menu>
        <br />
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={location.pathname === '/'}
            />
          </Link>
          <Link to='/rooms_and_rates'>
            <Menu.Item
              name='Room & Rate'
              id='Room & Rate'
              style={{
                width: '114px'
              }}
              active={location.pathname === '/rooms_and_rates'}
            >Room & Rate</Menu.Item>
          </Link>
          <Link to='/reservations'>
            <Menu.Item
              name='reservations'
              id='reservations'
              active={this.props.location.pathname === '/reservations'}
            />
          </Link>


          {this.rightNavItems()}
        </Menu>
      </Container>
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