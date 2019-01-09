import React from "react";
import { Header } from "semantic-ui-react";
import { Title, Title2 } from "../styles/AppStyles";
import Rooms from "./Rooms";

const Home = () => (
  <>
    <br />
    <br />
    <Title> Welcome to Terra Nova Cabins</Title>
    <Title2> HOTELS & RESORTS </Title2>
    {/* check availability */}
    <br />
    <br />
    <br />
    <br />
    <Rooms />
  </>
);

export default Home;
