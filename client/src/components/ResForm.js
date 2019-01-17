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
import { connect } from "react-redux";
import { setReservation } from "../reducers/reservation";

class ResForm extends React.Component {
  state = {
    reservation: {
      start_date: new Date(),
      end_date: new Date(),
      room: "",
      adults: null,
      children: null
    }
  };

  handleStartDate = date => {
    this.setState({
      reservation: { ...this.state.reservation, start_date: date }
    });
  };

  handleDepDate = date => {
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
      reservation: { ...this.state.reservation, Children: value }
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
    this.props.dispatch(setReservation(this.state.reservation));
  };

  render() {
    const {
      reservation: { start_date, end_date }
    } = this.state;

    return (
      <Container style={styles.flexTwo}>
        <Segment compact raised>
          <Form onSubmit={this.handleSubmit}>
            <Header>YOUR RESERVATION</Header>
            <Header as="h4">Arrival Date</Header>
            <DatePicker
              selected={start_date}
              onChange={this.handleStartDate}
              name="startDate"
            />
            <Header as="h4">Departure</Header>
            <DatePicker
              selected={end_date}
              onChange={this.handleDepDate}
              name="departureDate"
            />
            <Header>Rooms & Guest</Header>
            <Header as="h4">Rooms</Header>
            <Dropdown
              placeholder="Select Room"
              openOnFocus
              selection
              options={Room}
              item
              onChange={this.handleRoom}
            />
            <div style={styles.flex}>
              <Header as="h4">Adults: </Header>
              <Dropdown
                placeholder="-"
                fluid
                selection
                options={dropDown}
                onChange={this.handleAdults}
              />
              <Header as="h4">Children: </Header>
              <Dropdown
                placeholder="-"
                fluid
                selection
                options={dropDown}
                onChange={this.handleChildren}
              />
            </div>
            <Button color="brown">Check Availability</Button>
          </Form>
          {/* onClick api call to return available rooms that meet reservation requestes */}
        </Segment>
        <Calendar
          onChange={this.handleCalendar}
          value={[start_date, end_date]}
          selectRange
        />
      </Container>
    );
  }
}

export default connect()(ResForm);

const dropDown = [
  { key: 1, text: "0", value: 0 },
  { key: 2, text: "1", value: 1 },
  { key: 3, text: "2", value: 2 },
  { key: 4, text: "3", value: 3 },
  { key: 5, text: "4", value: 4 }
];

const Room = [
  { key: 1, text: "Family", value: "family", name: "room" },
  { key: 2, text: "Couple Room", value: "couple_room", name: "room" },
  { key: 3, text: "Standard Room", value: "standard_room", name: "room" },
  { key: 4, text: "Luxury Room", value: "luxury_room", name: "room" }
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
    marginTop: "20em"
  }
};
