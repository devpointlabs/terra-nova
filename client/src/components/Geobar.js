import React from 'react';
import { Menu, Container, Dropdown, } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { faCloud, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, } from 'react-router-dom';
// import ReactWeather from 'react-open-weather';
import i18n from '../i18n';


class Geobar extends React.Component {
  state = { user: null, toggled: false, };

  changeLanguage = (lng) => {
    if (this.state.toggled === true) {
      lng = 'en'
    } else {
      lng = 'zh'
    }
    i18n.changeLanguage(lng);
  }

  toggleLanguage = () => {
    this.setState({ toggled: !this.state.toggled })
    this.changeLanguage()
  }

  render() {
    const { auth: { user, }, } = this.props;
    return (
      <div style={styles.background}>

        <Container >
          <Menu secondary size='mini'>
            <Menu.Item style={styles.font}>
              <FontAwesomeIcon
                icon={faCloud}
                style={{
                  width: '20px'
                }} />
              32˚F
            {/* <ReactWeather
              forecast="today"
              apikey="4ad4c95bd36f481697d185313191001"
              type="city"
              city="Seattle" /> */}
              {/* Weather API DOCS
          {/* https://www.apixu.com/my/ */}
            </Menu.Item>

            <Menu.Item style={styles.font}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{
                  width: '15px'
                }}
              />
              Salt Lake City, UT
                          </Menu.Item>

            <Menu.Item style={styles.font}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  width: '20px'
                }} />
              1-TER-RAN-OVVA
                            </Menu.Item >
            <Menu.Item style={styles.font} position='right'>
              {user ?
                <Menu.Item style={styles.font}>
                  <i>
                    Welcome, {user.first_name}
                  </i>
                </Menu.Item>
                :
                null
              }
              <Dropdown item style={styles.font} text='$ (USD)'>
                <Dropdown.Menu>
                  <Dropdown.Item style={styles.font} onClick={this.handleChange}>
                    ¥ (CYN)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item style={styles.font} text='Language'>
                <Dropdown.Menu>
                  <Dropdown.Item style={styles.font} onClick={() => this.toggleLanguage()}>
                  {this.state.toggled ? 'English' : '中文'}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Button toggle onClick={() => this.changeLanguage('zh')}>ZH</Button> */}
              {/* <Button toggle onClick={() => this.toggleLanguage()}>{ this.state.toggled ? 'en' : '中文' }</Button> */}
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    )
  }
}

export class ConnectedGeobar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Geobar {...this.props} auth={auth} />
        }

      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedGeobar);

const styles = {
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
  border: {
    borderBottom: '15px solid white',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'white',
    background: 'blue, !important',
  },
  background: {
    backgroundColor: 'grey'
  }
}