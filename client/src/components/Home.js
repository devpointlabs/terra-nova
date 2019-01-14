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
      <WhiteButton>About Us</WhiteButton>
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
    <EmailForm/>
 </>
)

export default Home;
