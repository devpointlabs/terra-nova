import React from "react";
import { SubHeader } from "../styles/AppStyles";
import { Container } from "semantic-ui-react";
import ResForm from "./ResForm";
import { withNamespaces } from 'react-i18next';


class Reservation extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <SubHeader>{t("Reservations")}</SubHeader>
        <Container>
          <ResForm />
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(Reservation);
