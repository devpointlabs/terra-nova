import React from 'react';
import { Carousel, } from 'react-bootstrap';
import { Container, Image,  } from 'semantic-ui-react';
import Yellowstone from '../../assets/images/Yellowstone.png';
import GrandCanyonoftheYellowstone from '../../assets/images/GrandCanyonoftheYellowstone.png';
import Navbar from '../Navbar';
import Geobar from '../Geobar';

class MainCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
      <Container>

        <Carousel.Caption>
      <Geobar/>
      <Navbar/>        
        </Carousel.Caption>
      </Container>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        >
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
            src={Yellowstone} />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
            src={GrandCanyonoftheYellowstone} />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
            src={Yellowstone} />
        </Carousel.Item>
      </Carousel>
          </div>
    );
  }
}

export default MainCarousel;