import React from 'react';
import { Carousel, } from 'react-bootstrap';
// import { Header, } from 'semantic-ui-react';
// import Yellowstone from '../../assets/images/Yellowstone.png';
// import YellowstoneGeysers from '../../assets/images/YellowstoneGeysers.png';
// import GrandCanyonoftheYellowstone from '../../assets/images/GrandCanyonoftheYellowstone.png';
import { withNamespaces } from 'react-i18next';
import LPI1 from '../../assets/images/LandingPage/LPI1.jpg';
import LPI2 from '../../assets/images/LandingPage/LPI2.jpg';
import LPI3 from '../../assets/images/LandingPage/LPI3.jpg';
// import LPI4 from '../../assets/images/LandingPage/LPI4.jpg';
import { Title, Title3, WhiteLine } from '../../styles/AppStyles';


const MainCarousel = ({ t }) => (
  <div>
    <Carousel
      slide={true}
      indicators={false}
      interval={3000}
      controls={false}
      // style={styles.main}
    >

      <Carousel.Item>
        <img
          alt="1400x400"
          src={LPI1}
          style={styles.image}
        />
        <Carousel.Caption>
          <Title style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Title>
          <div style={styles.subtitle}>
            <div style={styles.topLine}>
              <WhiteLine />
              <Title3>
                {t("HOTELS & RESORTS")}
              </Title3>
              <WhiteLine />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="1400x400"
          src={LPI2}
          style={styles.image}
        />
        <Carousel.Caption>
          <Title style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Title>
          <div style={styles.subtitle}>
            <div style={styles.topLine}>
              <WhiteLine />
              <Title3>
                {t("HOTELS & RESORTS")}
              </Title3>
              <WhiteLine />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          alt="1400x400"
          src={LPI3}
          style={styles.image}
        />
        <Carousel.Caption>
          <Title style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Title>
          <div style={styles.subtitle}>
            <div style={styles.topLine}>
              <WhiteLine />
              <Title3>
                {t("HOTELS & RESORTS")}
              </Title3>
              <WhiteLine />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default withNamespaces()(MainCarousel);

const styles = {
  topLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-evenly',
    marginLeft: '125px',
    marginRight: '125px',
  },
  bottomLine: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: '100vh',
    minHeight: 'calc(100vh-136px)',
    width: '100%',
    marginTop: '75px',
  },
  title: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: '-200px',
    marginRight: '-200px',
  },
  subtitle: {
    height: '250px',
  },
  caption: {
    height: '550px',
  },
  main: {
    // marginTop: "calc(100vh-136px)"
  }
}
