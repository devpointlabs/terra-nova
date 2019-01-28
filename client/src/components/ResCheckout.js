import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import { SubHeader } from "../styles/AppStyles";
import ResCheckoutForm from "./ResCheckoutForm";
import { withNamespaces } from "react-i18next";

class ResCheckout extends React.Component {
  renderRoomDetails = () => {
    const {
      room: { room_type, cost, description, image },
      userSpecs: { start_date, end_date, adults, children }
    } = this.props.location.state;

    const startDate = start_date.toString();
    const endDate = end_date.toString();
    const { t } = this.props;

    return (
      <Segment.Group horizontal raised>
        <Segment>
          <Image src={image} alt="" />
        </Segment>
        <Segment>
          <Header as="h2">{t(room_type)}</Header>
          <hr />
          <Header as="h4">{t("Room Description")}</Header>
          <p>{t(description)}</p>
          <Header as="h4">{t("Reservation Details")}</Header>
          <p>
            {t("Price")}: {t("$")}
            {t(cost)}
          </p>
          <p>
            {t("Start Date")}: {startDate}
          </p>
          <p>
            {t("End Date")}: {endDate}
          </p>
          <p>
            {t("Adults")}: {adults}
          </p>
          <p>
            {t("Children")}: {children}
          </p>
        </Segment>
      </Segment.Group>
    );
  };

  render() {
    const { t } = this.props;
    return (
      <Container style={{ marginTop: "8em" }}>
        <SubHeader>{t("Reservation Checkout")}</SubHeader>
        <hr />
        <ResCheckoutForm
          userSpecs={this.props.history.location.state.userSpecs}
          room={this.props.history.location.state.room}
          history={this.props.history}
        />
        <hr />
        {this.renderRoomDetails()}
      </Container>
    );
  }
}

export default withNamespaces()(ResCheckout);
