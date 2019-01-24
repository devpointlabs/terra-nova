import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { SubHeader, HeaderLine } from "../styles/AppStyles";
import { withNamespaces } from 'react-i18next';

const News = ({t}) => (
  <>
  <Container>
    <Grid columns={2} padded='vertically'>
      <Grid.Column>
        <SubHeader style={subHeader}>{t("News")}</SubHeader>
        <HeaderLine/>
      </Grid.Column>
    </Grid>
  </Container>
    <div>
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
              {t("Update menu in Skyline Hotel")}
            </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
            }}>
            <Grid.Row style={gridPad.link}>
              {t("Read More")}
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
              {t("New Hikes Available for Spring")}
            </Grid.Row>
          <NavLink to='/' activeStyle=
          {{ 
            color: '#826614',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'lighter',
            fontSize: "13px",
          }}>
            <Grid.Row style={gridPad.link}>
              {t("Read More")}
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
              {t("Mother Earth Hosts Our Travels")}
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
              {t("Read More")}
          </Grid.Row>
          </Grid.Column>
          </NavLink>
        </Grid>
      </Grid>
    </div>
    </>
)

export default withNamespaces()(News);

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
  },
  line: {
    marginLeft: '-800px',
    marginTop: '1px',
  }
}

const subHeader = {
  fontSize: '3.0em',
  fontWeight: 'lighter',
  textAlign: 'left',
  fontFamily: "'Playfair Display', serif",
  paddingTop: '110px',
  color: 'black',
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



