import React from 'react';
import { Title, Title2, Title3, WhiteLine } from '../styles/AppStyles';
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
        <Title2><WhiteLine /> {t("HOTELS & RESORTS")} </Title2>
        <Title3> {t("Terra Nova Cabins represents the best in western hospitality and comfort, wrapped in a contemporary expression that will inspire your own unique adventures. Both a haven from the world and a basecamp for adventure, Terra Nova Cabins will be your new southwestern Montana destination rental.")}</Title3>
        <Title3> {t("OPENING SPRING 2019")}</Title3>
        {/* check availability */}
        <Rooms />

        <Reviews />
        <AboutUs />
      </>
    )
  }
}

export default withNamespaces()(Home);