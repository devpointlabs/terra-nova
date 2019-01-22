import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Grid, } from 'semantic-ui-react';
import { SubHeader, HeaderLine2,} from "../styles/AppStyles";


const News = () => (
  <div style={padding}>
        <Grid.Column>
          <SubHeader>News</SubHeader>
          <HeaderLine2/>
          </Grid.Column>

      <Grid columns={4}centered divided>
      {/* Grid 0 */}
        <Grid>
        </Grid>
        {/* Grid 1 */}
          <Grid columns={2} divided style={gridPad.main}>
          <Grid.Row verticalAlign='top' textAlign='left'>
            <Grid.Column width={7} style={style.numDate}>
              25
            </Grid.Column>
            <Grid.Column width={7} style={style.date}>
            <Grid.Row textAlign='left'>
              AUGUST
            </Grid.Row>
            <Grid.Row textAlign='left'>
              2017
            </Grid.Row>
          </Grid.Column>
          </Grid.Row>
            <Grid.Row style={style.text}>
              Update menu food in Skyline Hotel
            </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
            }}>
            <Grid.Row style={gridPad.link}>
              Read More
          </Grid.Row>
          </NavLink>
        </Grid>
          {/* Grid 2 */}
        <Grid columns={2} divided style={gridPad.main}>
          <Grid.Row verticalAlign='top' textAlign='left'>
            <Grid.Column width={7} style={style.numDate}>
              22
            </Grid.Column>
            <Grid.Column width={7} style={style.date}>
            <Grid.Row textAlign='left'>
              AUGUST
            </Grid.Row>
            <Grid.Row textAlign='left'>
              2017
            </Grid.Row>
          </Grid.Column>
          </Grid.Row>
            <Grid.Row style={style.text}>
              Las Maquinas on Tragamonedas
            </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
          }}>
            <Grid.Row style={gridPad.link}>
              Read More
          </Grid.Row>
          </NavLink>
        </Grid>
          {/* Grid 3 */}
        <Grid columns={2} divided  style={gridPad.main}>
        <Grid.Row verticalAlign='top' textAlign='left'>
            <Grid.Column width={7} style={style.numDate}>
              06
            </Grid.Column>
            <Grid.Column width={7} style={style.date}>
            <Grid.Row textAlign='left'>
              AUGUST
            </Grid.Row>
            <Grid.Row textAlign='left'>
              2017
            </Grid.Row>
          </Grid.Column>
          </Grid.Row>
            <Grid.Row style={style.text}>
              Mother Earth Hosts Our Travels
            </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
          }}>
          <Grid.Column>
            <Grid.Row style={gridPad.link}>
              Read More
          </Grid.Row>
          </Grid.Column>
          </NavLink>
        </Grid>
      </Grid>
  </div>
)

export default News;

const style = {
  text: {
    color: "black",
    fontSize: "27px",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '0.5px',
    wordSpacing: '5px',
    lineHeight: '30px',
    wordWrap: 'break-word',

  },
  numDate: {
    color: "grey",
    fontSize: "45px",
    textAlign: "left",
    fontFamily: "'Playfair Display', serif",
    // borderRight: '1px solid grey'
  },
  date: {
    color: "grey",
    fontSize: "14px",
    fontWeight: '550',
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '1px',
    alignContent: 'left',
    paddingLeft: '30px',
  }
}

const subHeader = {
  fontSize: '3.5em',
  fontWeight: 'normal',
  textAlign: 'left',
  fontFamily: "'Playfair Display', serif",
  paddingTop: '110px',
  paddingBottom: '50px',
  paddingLeft: '30px',
}

const padding = {
  paddingBottom: '100px',
}

const gridPad = {
  main: {
    paddingLeft: '45px',
    paddingRight: '100px',
  },

  row: {
    paddingBottom: '20px',
    // paddingx',
  },
  column: {
    // paddingRight: '10px',
    paddingLeft: '20px',
  },
  link: {
    paddingLeft: '15px',
  }
}



