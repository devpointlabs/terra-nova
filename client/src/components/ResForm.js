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

class ResForm extends React.Component {
  state = {
    reservation: {
      startDate: new Date(),
      departureDate: new Date(),
      room: "",
      adults: null,
      Children: null
    }
  };

  handleStartDate = date => {
    this.setState({
      reservation: { ...this.state.reservation, startDate: date }
    });
  };

  handleDepDate = date => {
    this.setState({
      reservation: { ...this.state.reservation, departureDate: date }
    });
  };

  handleRoom = e => {
    const value = e.target.outerText;
    this.setState({
      reservation: { ...this.state.reservation, room: value }
    });
  };

  handleAdults = e => {
    const value = e.target.outerText;
    this.setState({
      reservation: { ...this.state.reservation, adults: value }
    });
  };

  handleChildren = e => {
    const value = e.target.outerText;
    this.setState({
      reservation: { ...this.state.reservation, Children: value }
    });
  };

  adults;
  render() {
    const {
      reservation: { startDate, departureDate }
    } = this.state;

    return (
      <Container>
        <Segment compact raised>
          <Form>
            <Header>YOUR RESERVATION</Header>
            <Header as="h4">Arrival Date</Header>
            <DatePicker
              selected={startDate}
              onChange={this.handleStartDate}
              name="startDate"
            />
            <Header as="h4">Departure</Header>
            <DatePicker
              selected={departureDate}
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
              simple
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
          </Form>
          <Button color="brown">Check Availability</Button>
        </Segment>
      </Container>
    );
  }
}

export default ResForm;

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
  }
};
