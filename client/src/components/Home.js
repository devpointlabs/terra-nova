import React from 'react';
// import { withNamespaces } from 'react-i18next';
// import { Header,  } from 'semantic-ui-react';
// import { Title, Title2, WhiteLine, } from '../styles/AppStyles';
import Rooms from './Rooms';
import Review from './Review';
import AboutUs from './AboutUs';
import Events from './Events';
import Carousel from './carousel/Carousel';
import News from './News';
import Gallery from './Gallery';



class Home extends React.Component {

  render() {
    // const { t } = this.props;
    return (
      <>
      <Carousel/>
        <Rooms />
        <AboutUs />
        <Review />
        <Events />
        <News/>
        <Gallery/>
      </>
    )
  }
}

export default Home;