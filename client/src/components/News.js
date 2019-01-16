import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Container, Grid, Header, Divider, } from 'semantic-ui-react';
import { HeaderLine, } from '../styles/AppStyles';

const News = () => (
  <div style={padding}>
        <Grid.Column>
            <Header as='h1' style={subHeader}>
              News
            </Header>
          </Grid.Column>
      <Grid columns={3} divided>
        {/* Grid 1 */}
          <Grid.Column style={gridPad.column}>
          <Grid.Row >
            <Grid.Column width={2} style={style.numDate}>
              25
            </Grid.Column>
            <Grid.Column style={style.date} width={2}>
              August
          <br />
              2017
          </Grid.Column>
          </Grid.Row>
          <br />
          <Grid.Row style= {gridPad.row}>
            <Grid.Column style={style.text} width={5}>
              Update menu food in SKyline Hotel
            </Grid.Column>
          </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
            }}>
            <Grid.Row>
              Read More
          </Grid.Row>
          </NavLink>
        </Grid.Column>
          {/* Grid 2 */}
        <Grid.Column style={gridPad.column}>
          <Grid.Row verticalAlign='top' textAlign='left'>
            <Grid.Column width={5} style={style.numDate}>
              22
            </Grid.Column>
            <Grid.Column style={style.date} width={5}>
            <Grid.Row textAlign='left'>
              August
              <br />
              2017
            </Grid.Row>
          </Grid.Column>
          </Grid.Row>
          <br />
          <Grid.Row style= {gridPad.row}>
            <Grid.Column style={style.text} width={5}>
              Las Maquinas on Tragamonedas
            </Grid.Column>
          </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
            }}>
            <Grid.Row>
              Read More
          </Grid.Row>
          </NavLink>
        </Grid.Column>
          {/* Grid 3 */}
        <Grid.Column style={gridPad.column}>
          <Grid.Row>
            <Grid.Column width={5} style={style.numDate}>
              06
            </Grid.Column>
            <Grid.Column style={style.date} width={5}>
              August
          <br />
              2017
          </Grid.Column>
          </Grid.Row>
          <br />
          <Grid.Row style= {gridPad.row}>
            <Grid.Column style={style.text} width={5}>
              Mother Earth Hosts Our Travels
            </Grid.Column>
          </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "14px",
            }}>
            <Grid.Row>
              Read More
          </Grid.Row>
          </NavLink>
        </Grid.Column>
      </Grid>

  </div>
)

export default News;

const style = {
  text: {
    color: "black",
    fontSize: "25px",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '1px',
    wordSpacing: '5px',
    lineHeight: '30px',
    // paddingBottom: '50px',
  },
  numDate: {
    color: "grey",
    fontSize: "40px",
    textAlign: "left",
    fontFamily: "'Playfair Display', serif",
  },
  date: {
    color: "grey",
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '1px',
  }
}

const subHeader = {
  fontSize: '3.0em',
  fontWeight: 'normal',
  textAlign: 'left',
  fontFamily: "'Playfair Display', serif",
  paddingTop: '110px',
  paddingBottom: '50px',
  paddingLeft: '30px',
}

const padding = {
  paddingBottom: '150px',
}
const gridPad = {
  row: {
    paddingBottom: '20px',
  },
  column: {
    paddingRight: '70px',
    paddingLeft: '50px',
  }
}

