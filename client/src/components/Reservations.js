import React from "react";
import { SubHeader } from "../styles/AppStyles";
import ResForm from "./ResForm";
import { withNamespaces } from "react-i18next";
import { getRooms } from "../reducers/rooms";
import { connect } from "react-redux";
import RenderAvailable from "./RenderAvailable";
import { Container } from "semantic-ui-react";

class Reservation extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRooms());
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <SubHeader>{t("Reservations")}</SubHeader>
        <hr />
        <ResForm />
        <RenderAvailable history={this.props.history} />
      </Container>
    );
  }
}

export default withNamespaces()(connect()(Reservation));
