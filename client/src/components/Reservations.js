import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";
import { withNamespaces } from 'react-i18next';
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";
import RenderAvailable from "./RenderAvailable";
import { Container } from 'semantic-ui-react';

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRooms());
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <SubHeader>{t("Reservations")}</SubHeader>
        <Container>
          <ResForm />
          <RenderAvailable history={this.props.history} />
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(connect()(Reservation));

