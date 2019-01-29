import React from 'react';
import {Button, Segment, Header, Image} from 'semantic-ui-react';

const renderRoomDetails = () => {
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

const renderSubmit = ({onClick, isDisabled, }) => {
    debugger
  return (
    <Button
      primary
    //   onClick={function(event){onClick(); renderRoomDetails()}}
    //   onClick={renderRoomDetails()}
      onClick={this.handlePaymentMethod}
    //   onClick={onclick()}
      disabled={isDisabled}
    >
    </Button>
  )
}

export default renderSubmit;