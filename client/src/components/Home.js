import React from 'react';
import Rooms from './Rooms';
import Review from './Review';
import AboutUs from './AboutUs';
import Events from './Events';
import Carousel from './carousel/Carousel';
import News from './News';
import Gallery from './Gallery';



class Home extends React.Component {

  render() {
    return (
      <>
      <Carousel/>
        <Rooms />
        <AboutUs />
        <Review />
        <Reviews />
        <Events />
        <News/>
        <Gallery/>
      </>
    )
  }
}

export default Home;