import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Title2, SubHeader } from '../styles/AppStyles';
import { withNamespaces } from 'react-i18next';

class Careers extends React.Component {
    state = { positions: [] };
    

    renderPositions = () => {
    };//end of renderPositions

    render() {
      const { t } = this.props;

        return (
          <div>
            <Container>
              <br />
              <br />
              <br />
              <Title2>{t("Careers with Terra Nova")}</Title2>
              <br />
              <br />
              <SubHeader>{t("Current Job Openings")}</SubHeader>
              <Card.Group centered itemsPerRow={4}>
                {this.renderPositions()}
              </Card.Group>
              <br />
              <br />
              <br />
              <h3>{t("Employee Benefits")}</h3>
            </Container>
          </div>
        )
    }
};//end of Careers Class

export default withNamespaces()(Careers);