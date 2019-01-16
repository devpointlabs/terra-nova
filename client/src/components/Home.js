import React from 'react';
import { Title, Title2, WhiteLine } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';


const Home = () => (
  <>
    <Title> Welcome to Terra Nova Cabins</Title>
      <Title2><WhiteLine/> HOTELS & RESORTS </Title2>
    {/* check availability */}
    <Rooms/>
   
    <Reviews/>
    <AboutUs/>
 </>
)

export default Home;
