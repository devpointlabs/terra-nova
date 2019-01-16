import React from 'react';
import { withNamespaces } from 'react-i18next';
// import { Header,  } from 'semantic-ui-react';
import { Title, Title2, WhiteLine, } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';

import EmailForm from './EmailForm';
import News from './News';

class Home extends React.Component {


  render() {
    const { t } = this.props;
    return (
      <>
        <Title> {t("Welcome to Terra Nova Cabins")}</Title>
        <Title2><WhiteLine/> HOTELS & RESORTS </Title2>
        {/* check availability */}
        <Rooms />

        <AboutUs />
        <Reviews />
        <News/>
        <EmailForm/>
      </>
    )
  }
}

export default withNamespaces()(Home);