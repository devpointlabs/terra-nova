import React from 'react';
import { Carousel, } from 'react-bootstrap';
import { Header, } from 'semantic-ui-react';
// import Yellowstone from '../../assets/images/Yellowstone.png';
// import YellowstoneGeysers from '../../assets/images/YellowstoneGeysers.png';
// import GrandCanyonoftheYellowstone from '../../assets/images/GrandCanyonoftheYellowstone.png';
import { withNamespaces } from 'react-i18next';
import LPI1 from '../../assets/images/LandingPage/LPI1.jpg'
import LPI2 from '../../assets/images/LandingPage/LPI2.jpg'
import LPI3 from '../../assets/images/LandingPage/LPI3.jpg'
import LPI4 from '../../assets/images/LandingPage/LPI4.jpg'
import { Title, Title2, } from '../../styles/AppStyles';


const MainCarousel = ({ t }) => (
  <div  >
    <Carousel
      slide={true}
      indicators={false}
      interval={3000}
      controls={false}
    >
      <Carousel.Item>
        <img
          width={1500}
          height={400}
          alt="1500x400"
          src={LPI1}
          style={styles.image}
        />
        <Carousel.Caption>
          <Header style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Header>
          <div style={styles.line}>
            <Title2>
              {/* <WhiteLine />  */}
              <hr style={styles.line} />
              HOTELS & RESORTS
                </Title2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width={1500}
          height={400}
          alt="1500x400"
          src={LPI2}
          style={styles.image}
        />
        <Carousel.Caption>
          <Title style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Title>
          <div style={styles.line}>
            <Title2>
              {/* <WhiteLine />  */}
              <hr style={styles.line} />
              HOTELS & RESORTS
                </Title2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width={1500}
          height={400}
          alt="1500x400"
          src={LPI3}
          style={styles.image}
        />
        <Carousel.Caption>
          <Title style={styles.title}> {t("Welcome to Terra Nova Cabins")}</Title>
          <div style={styles.line}>
            <Title2>
              <hr style={styles.line} />
              HOTELS & RESORTS
              </Title2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default withNamespaces()(MainCarousel);

const styles = {
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '50px',
    marginLeft: '50px',
    margineTop: '400px',
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: '600px'
  },
  title: {
    fontSize: '6em',
    color: 'white',
    fontFamily: "'Playfair Display', serif",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignContent: 'center',
    marginLeft: '-200px',
    marginRight: '-200px',
  }
}
