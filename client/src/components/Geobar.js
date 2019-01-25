import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { faCloud, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, } from 'react-router-dom';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';



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
    const { t } = this.props;
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
            </Menu.Item>
            <Menu.Item style={styles.font}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{
                  width: '15px'
                }}
              />
              {t("Salt Lake City, UT")}
            </Menu.Item>
            <Menu.Item style={styles.font}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  width: '20px'
                }} />
              1-TER-RAN-OVVA
            </Menu.Item >
            <Menu.Item  position='right'>
                  <Button style={styles.toggle} onClick={() => this.toggleLanguage()}>
                    {this.state.toggled ? 'English' : '中文'}
                  </Button>
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

export default withNamespaces()(withRouter(ConnectedGeobar));

const styles = {
  font: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '12px',
  },
  toggle: {
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    backgroundColor: 'grey',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '10px',
    // borderTop: '1px solid white',
    // borderBottom: '1px solid white',
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
    backgroundColor: 'grey',
    marginBottom: '-10px',
    marginTop: '-10px',
  }
}