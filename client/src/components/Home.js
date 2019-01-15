import React from 'react';
import { Title, Title2, WhiteButton } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import EmailForm from './EmailForm';

const Home = () => (
  <>
    <Title> Welcome to Terra Nova Cabins</Title>
    <Title2> HOTELS & RESORTS </Title2>

    <Rooms />

    <Reviews />
    <AboutUs />
  </>
)

export default Home;
