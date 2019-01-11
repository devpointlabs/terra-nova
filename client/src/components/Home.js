import React from 'react';
import { Title, Title2, WhiteButton } from '../styles/AppStyles';
import Rooms from './Rooms';
import Reviews from './Reviews';
import {Container} from 'semantic-ui-react'

const Home = () => (
  <>
    <br />
    <br />
    <Container>
    <Title> Welcome to Terra Nova Cabins</Title>
      <Title2> HOTELS & RESORTS </Title2>
      <WhiteButton>About Us</WhiteButton>
    </Container>
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
    <br/>
    <br/>
    <br/>
    <Reviews/>
 </>
)

export default Home;
