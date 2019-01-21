import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
// import ReactWeather from 'react-open-weather';
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';
import { withNamespaces } from 'react-i18next';

class Navbar extends React.Component {
  // state = { user: null, };

  // admin = () => {
  //   const { auth: { user, handleLogout, }, location, t } = this.props;
  //   if (user.admin) {
  //     return (
  //       <Dropdown item href="/events" style={styles.font} text='NEW EVENTd'>
  //         <Dropdown.Menu>
  //           <Link to='/register'>
  //             <Dropdown.Item style={styles.font} text='NEW ADMIN' active={location.pathname === '/register'}>
  //             </Dropdown.Item></Link>
  //           </Dropdown.Item>
  //         </Dropdown.Menu>
  //       </Dropdown>
  //     )
  //   }
  // }

  renderIcon = () => {
    return (
      <Menu.Item position='left'>
        <Image src={Terra_Nova_Cabins_Logo}
          size="tiny"
          style={styles.image}
          position='left'
          floated='left'
          verticalAlign='top'
        />
      </Menu.Item>
    )
  }; 

  adminNav = () => {
    const { auth: { user, handleLogout, location, }, t } = this.props;

    return (
      // <Container>
        <Dropdown.Menu style={styles.font} position='right'>
          {user ?
            <div style={styles.background}>

              <Dropdown item style={styles.font}text={t("Welcome")} >
              <Link to='/register'>
                <Dropdown.Item style={styles.font} position='right' text={t("NEW ADMIN")}>
                </Dropdown.Item></Link>
              <Dropdown.Item href="/events" style={styles.font} text={t("NEW EVENT")}>
              </Dropdown.Item>
              <Dropdown.Item style={styles.font} text={t("LOGOUT")} onClick={() => handleLogout(this.props.history)}>
              </Dropdown.Item>
     </Dropdown>
            </div>
            :
            null
          }
        </Dropdown.Menu>
      // </Container>
    )
  }



  render() {
    const { auth: { user, handleLogout, }, location, t } = this.props;

    return (
      <div style={styles.background}>
        <Container>
          <Menu position='center' secondary>
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
                style={styles.font}
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
            {this.adminNav()}
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
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '35px',
  },
  image: {
    padding: '0.5px',
    marginBottom: '-40px',
    marginTop: '-10px',
    height: '100px',
    width: 'auto',
  },
  background: {
    backgroundColor: 'rgb(35, 35, 35)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    // padding: '0px'
  }
}
