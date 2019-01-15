import React from 'react';
import { Title, Title2, } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Events from './Events';

const Home = () => (
  <>
    <Title> Welcome to Terra Nova Cabins</Title>
    <Title2> HOTELS & RESORTS </Title2>

    <Rooms />
    <Reviews />
    <Events />
    <AboutUs />
  </>
)

export default Home;
