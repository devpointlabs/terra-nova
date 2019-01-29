import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";

class CheckoutConfirm extends React.Component {
  render() {
    const { room, userSpecs } = this.props.location.state;
    const startDate = userSpecs.start_date.toString();
    const endDate = userSpecs.end_date.toString();
    const { t } = this.props;

    return (
      <Container style={styles}>
        <Segment>
          <h1>{t("Your reservation has been booked!")}</h1>
          <hr />
          <h3>{t("Rerservation Details")}</h3>
          <p>
            {t("Reserved By")}: {t(userSpecs.first_name)}{" "}
          </p>
          <p>
            {t("Email")}: {t(userSpecs.email)}
          </p>
          <p>
            {t("Room")}: {t(room.room_type)}
          </p>
          <p>
            {t("Check-In")}: {startDate}
          </p>
          <p>
            {t("Check-Out")}: {endDate}
          </p>
          <p>
            {t("Adults")}: {t(userSpecs.adults)}
          </p>
          <p>
            {t("Children")}: {t(userSpecs.children)}
          </p>
        </Segment>
      </Container>
    );
  }
}
export default withNamespaces()(CheckoutConfirm);

const styles = {
  marginTop: "200px"
};
