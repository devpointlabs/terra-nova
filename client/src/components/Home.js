import React from 'react';
import { Title, Title2, } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs'

const Home = () => (
  <>
    <Title> Welcome to Terra Nova Cabins</Title>
      <Title2> HOTELS & RESORTS </Title2>
    {/* check availability */}
    <br/>
    <br/>
    <br/>
    <br/>
    <Rooms/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Reviews/>
    <AboutUs/>
 </>
)

export default Home;
