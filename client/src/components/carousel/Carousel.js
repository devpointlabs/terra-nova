import React from 'react';
import { Carousel, } from 'react-bootstrap';
import { Image, } from 'semantic-ui-react';
import Yellowstone from '../../assets/images/Yellowstone.png';
import YellowstoneGeysers from '../../assets/images/YellowstoneGeysers.png';
import GrandCanyonoftheYellowstone from '../../assets/images/GrandCanyonoftheYellowstone.png';
import { withNamespaces } from 'react-i18next';
import { Title, Title2, } from '../../styles/AppStyles';


const MainCarousel = ({t}) => (
      <div>
        <Carousel
          slide={true}
          indicators={false}
          interval={5000}
        >
          <Carousel.Item>
            <Image
              width={9000}
              height={400}
              alt="9000x400"
              src={GrandCanyonoftheYellowstone} />
            <Carousel.Caption>
              <Title> {t("Welcome to Terra Nova Cabins")}</Title>
              <div style={styles.line}>
              <Title2>
                {/* <WhiteLine />  */}
                <hr style={styles.line}/>
                HOTELS & RESORTS
                </Title2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <Image
              width={9000}
              height={400}
              alt="9000x400"
              src={GrandCanyonoftheYellowstone} />
            <Carousel.Caption>
              <Title> {t("Welcome to Terra Nova Cabins")}</Title>
              <div style={styles.line}>
              <Title2>
                {/* <WhiteLine />  */}
                <hr style={styles.line}/>
                HOTELS & RESORTS 
                </Title2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              width={9000}
              height={400}
              alt="9000x400"
              src={GrandCanyonoftheYellowstone} />
            <Carousel.Caption>
              <Title> {t("Welcome to Terra Nova Cabins")}</Title>
              <div style={styles.line}>
              <Title2>
              <hr style={styles.line}/>
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
}
