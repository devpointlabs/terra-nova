import React from 'react';
// import { withNamespaces } from 'react-i18next';
// import { Header,  } from 'semantic-ui-react';
// import { Title, Title2, WhiteLine, } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Events from './Events';
import { withNamespaces } from 'react-i18next';
import Carousel from './carousel/Carousel';
import News from './News';
import Gallery from './Gallery';


class Home extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <>
      <Carousel/>
        {/* <Title> {t("Welcome to Terra Nova Cabins")}</Title>
        <Title2><WhiteLine/> HOTELS & RESORTS </Title2> */}
        {/* check availability */}
        <Rooms />
        <Events />
        <AboutUs />
        <Reviews />
        <News/>
        <Gallery/>
      </>
    )
  }
}

export default withNamespaces()(Home);