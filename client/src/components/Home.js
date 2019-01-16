import React from 'react';
import { Header, } from 'semantic-ui-react';
import Rooms from './Rooms';

class Home extends React.Component {

  render() { 
    const { } = this.props;
    return (
        <div>
          <h1>{("Welcome to Terra Nova Cabins")}</h1>
          <h2> {("HOTELS & RESORTS")} </h2>
        </div>
    )
  }

}


export default Home;