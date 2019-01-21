import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Container, Image,} from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
// import ReactWeather from 'react-open-weather';
import Terra_Nova_Cabins_Logo from '../assets/images/Terra_Nova_Cabins_Logo.png';

class Navbar extends React.Component {
  state = { user: null, };

  // rightNavItems = () => {
  //   const { auth: { user, handleLogout, }, location, } = this.props;
  //   if (user) {
  //     return (
  //       <div>
  //         <Menu.Menu position='right'>
  //           <Menu.Item
  //             style={styles.font}
  //             name='LOGOUT'
  //             onClick={() => handleLogout(this.props.history)}
  //           />
  //         </Menu.Menu>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>

  //         <Container>
  //           <Menu.Menu position='right'>
  //             <Link to='/login'>
  //               <Menu.Item
  //                 style={styles.font}
  //                 id='login'
  //                 name='LOGIN'
  //                 active={location.pathname === '/login'}
  //               />
  //             </Link>
  //             <Link to='/register'>
  //               <Menu.Item
  //                 style={styles.font}
  //                 id='register'
  //                 name='REGISTER'
  //                 active={location.pathname === '/register'}
  //               />
  //             </Link>
  //           </Menu.Menu>
  //         </Container>
  //       </div>
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
        {/* <img src={Terra_Nova_Cabins_Logo}
        style={styles.image}
        /> */}
      </Menu.Item>
    )
  }; 

  render() {
    const { auth: location, } = this.props;
    return (
      <div style={styles.background}>
        <Container>
          <Menu position='center' secondary>
            {this.renderIcon()}
            <Link to='/'>
              <Menu.Item
                style={styles.font}
                name='HOME'
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
              > ROOM & RATE
                </Menu.Item>
            </Link>
            <Link to='/reservations'>
              <Menu.Item
                style={styles.font}
                name='RESERVATIONS'
                id='reservations'
                active={this.props.location.pathname === '/reservations'}
              />
            </Link>
            <Link to='/gallery'>
              <Menu.Item
                style={styles.font}
                name='GALLERY'
                id='gallery'
                active={this.props.location.pathname === '/gallery'}
              />
            </Link>

            {/* Not quite sure what page is for */}
            {/* <Dropdown style={styles.font} item text='PAGE'>
              <Dropdown.Menu >
                <Link  />
                <Dropdown.Item basic>
                  Test1
               </Dropdown.Item>
                <Dropdown.Item basic>
                  <Link />
                  Test2
               </Dropdown.Item>
                <Dropdown.Item basic>
                  <Link />
                  Test3
               </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Link to='/about_us'>
              <Menu.Item
                style={styles.font}
                name='ABOUT'
                id='about'
                active={this.props.location.pathname === '/about_us'}
              />
            </Link>
            <Link to='/contact'>
              <Menu.Item
                style={styles.font}
                name='CONTACT'
                id='contact'
                active={this.props.location.pathname === '/contact'}
              />
            </Link>
            {/* {this.rightNavItems()} */}
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

export default withRouter(ConnectedNavbar);

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
