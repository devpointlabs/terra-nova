import React from 'react';
import { Header, } from 'semantic-ui-react';
import { Title, Title2, BackgroundImage } from '../styles/AppStyles';
import Rooms from './Rooms';





const Home = () => (
  <>
    {/* <BackgroundImage > */}
    <br />
    <br />
    {/* <img 
    src={require('../images/GrandCanyonoftheYellowstone.png')}
    style={{
      width: '100%',
      height: '600px'
    }}
    /> */}

    <Title> Welcome to Terra Nova Cabins</Title>
      <Title2> HOTELS & RESORTS </Title2>
    {/* check availability */}
    <br/>
    <br/>
    <br/>
    <br/>
    <Rooms/>
    {/* </BackgroundImage> */}
 </>
)

export default Home;

