import React from "react";
import {
  Form,
  Segment,
  Header,
  Container,
  Dropdown,
  Button
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { setReservation } from "../reducers/reservation";
import { setReserved } from "../reducers/reserved";
import axios from "axios";

class ResForm extends React.Component {
  state = {
    reservation: {
      start_date: new Date(),
      end_date: new Date(),
      room: "Single Room",
      adults: 1,
      children: 0
    }
  };

  handleStartDate = date => {
    this.setState({
      reservation: { ...this.state.reservation, start_date: date }
    });
  };

  handleEndDate = date => {
    this.setState({
      reservation: { ...this.state.reservation, end_date: date }
    });
  };

  handleRoom = e => {
    const value = e.target.outerText;
    this.setState({
      reservation: { ...this.state.reservation, room: value }
    });
  };

  handleAdults = e => {
    const value = parseInt(e.target.outerText);
    this.setState({
      reservation: { ...this.state.reservation, adults: value }
    });
  };

  handleChildren = e => {
    const value = parseInt(e.target.outerText);
    this.setState({
      reservation: { ...this.state.reservation, children: value }
    });
  };

  handleCalendar = range => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        start_date: range[0],
        end_date: range[1]
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      reservation: { start_date, end_date, room }
    } = this.state;
    this.props.dispatch(setReservation(this.state.reservation));
    axios
      .get(`/api/get_reservations/${start_date}/${end_date}/${room}`)
      .then(res => this.props.dispatch(setReserved(res.data)));
  };

  render() {
    const {
      reservation: { start_date, end_date }
    } = this.state;

    const { t } = this.props;

    return (
      <Container style={styles.flexTwo}>
        <Segment compact raised>
          <Form>
            <Header>{t("YOUR RESERVATION")}</Header>
            <Header as="h4">{t("Arrival Date")}</Header>
            <DatePicker
              minDate={new Date()}
              selected={start_date}
              onChange={this.handleStartDate}
            />
            <Header as="h4">{t("Departure")}</Header>
            <DatePicker
              minDate={new Date()}
              selected={end_date}
              onChange={this.handleEndDate}
            />
            <Header>{t("Rooms & Guest")}</Header>
            <Header as="h4">{t("Rooms")}</Header>
            <Dropdown
              placeholder={t("Single Room")}
              selection
              options={Room}
              onChange={this.handleRoom}
            />
            <div style={styles.flex}>
              <Header as="h4">{t("Adults")} </Header>
              <Dropdown
                placeholder="-"
                fluid
                selection
                defaultValue={1}
                options={dropDown}
                onChange={this.handleAdults}
              />
              <Header as="h4">{t("Children")}</Header>
              <Dropdown
                placeholder="0"
                fluid
                selection
                options={dropDown}
                onChange={this.handleChildren}
              />
            </div>
            <Button onClick={this.handleSubmit} color="brown">
              {t("Check Availability")}
            </Button>
          </Form>

          {/* onClick api call to return available rooms that meet reservation requestes */}
        </Segment>
        <Calendar
          onChange={this.handleCalendar}
          value={[start_date, end_date]}
          selectRange
          minDate={new Date()}
        />
      </Container>
    );
  }
}

export default withNamespaces()(connect()(ResForm));

const dropDown = [
  { key: 1, text: "0", value: 0 },
  { key: 2, text: "1", value: 1 },
  { key: 3, text: "2", value: 2 },
  { key: 4, text: "3", value: 3 },
  { key: 5, text: "4", value: 4 }
];

const Room = [
  { key: 1, text: "Single Room", value: "single room", name: "room" },
  { key: 2, text: "Double Room", value: "double room", name: "room" },
  { key: 3, text: "Family Room", value: "family", name: "room" }
];

const styles = {
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: "30px",
    marginBottom: "30px"
  },

  flexTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "10em"
  }
};
