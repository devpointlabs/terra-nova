import React from 'react';
import { SubHeader, HeaderLine, Title4 } from "../styles/AppStyles";
import { Card, Container, Grid } from "semantic-ui-react";
import { withNamespaces } from 'react-i18next';
import golfCup from "../assets/images/golfCup.jpg";
import weddingDay from "../assets/images/weddingDay.jpg";
import lakeBeach from "../assets/images/lakeBeach.jpg";

const Events = ({ t }) => {
    return (
        <Container>
            <div>
                <Grid columns={2} padded='vertically'>
                <Grid.Column>
                <SubHeader style={subHeader}>{t("Our Events")}</SubHeader>
                <HeaderLine/>
                </Grid.Column>
                </Grid>
            </div>
                <Card.Group centered itemsPerRow={3}stackable>
                <Card style={styleCard1} stackable>
                        <Title4>{t("Wedding Day")}</Title4>
                    </Card>
                    <Card style={styleCard2}> 
                        <Title4>{t("Golf Cup")} 2017</Title4>
                    </Card>
                    <Card style={styleCard3}>
                        <Title4>{t("Beach Sports")}</Title4>
                    </Card>
                </Card.Group>
        </Container>
    )
}

const styleCard1 = {
    background: `url(${weddingDay})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

const styleCard2 = {
    background: `url(${golfCup})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

const styleCard3 = {
    background: `url(${lakeBeach})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

const subHeader = {
    fontSize: '3.0em',
    fontWeight: 'lighter',
    textAlign: 'left',
    fontFamily: "'Playfair Display', serif",
    paddingTop: '110px',
    color: 'black',
}

export default withNamespaces()(Events);
