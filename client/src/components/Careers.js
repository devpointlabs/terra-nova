import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Title2, SubHeader } from '../styles/AppStyles';

class Careers extends React.Component {
    state = { positions: [] };

    renderPositions = () => {
    };//end of renderPositions

    render() {
        return (
          <div>
            <Container>
              <br />
              <br />
              <br />
              <Title2>Careers with Terra Nova</Title2>
              <br />
              <br />
              <SubHeader>Current Job Openings</SubHeader>
              <Card.Group centered itemsPerRow={4}>
                {this.renderPositions()}
              </Card.Group>
              <br />
              <br />
              <br />
              <h3>Employee Benefits</h3>
            </Container>
          </div>
        )
    }
};//end of Careers Class

export default Careers;