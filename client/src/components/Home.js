import React from 'react';
// import { Header,  } from 'semantic-ui-react';
import { Title, Title2, WhiteLine } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import { withNamespaces } from 'react-i18next';

class Home extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <>
        <Title> {t("Welcome to Terra Nova Cabins")}</Title>
        <Title2><WhiteLine /> HOTELS & RESORTS </Title2>
        {/* check availability */}
        <Rooms />

        <Reviews />
        <AboutUs />
      </>
    )
  }
}

export default withNamespaces()(Home);