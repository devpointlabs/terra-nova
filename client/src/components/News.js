import React from 'react';
import { Container, Grid, } from 'semantic-ui-react';
import { SubHeader } from '../styles/AppStyles';

const News = () => {
  return(
    <Container>
      <SubHeader>
        News
      </SubHeader>
      <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Grid.Content>
          News
          </Grid.Content>
      </Grid.Column>
      <Grid.Column>
        <Grid.Content>

          </Grid.Content>
      </Grid.Column>
      <Grid.Column>
        <Grid.Content>

          </Grid.Content>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
  )
}

export default News;