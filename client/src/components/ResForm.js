import React from "react";
import {
  Form,
  Segment,
  Header,
  Container,
  Dropdown,
  Grid,
  Button
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ResForm extends React.Component {
  state = {
    reservation: { startDate: new Date(), departureDate: new Date(), room: "" }
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

  render() {
    const {
      reservation: { startDate, departureDate }
    } = this.state;

    return (
      <Container>
        <Segment compact>
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
              <Header>Adults: </Header>
              <Dropdown
                placeholder="Select Number"
                selection
                simple
                item
                options={dropDown}
              />
              <Header>Children: </Header>
              <Dropdown
                placeholder="Select Number"
                selection
                simple
                item
                options={dropDown}
              />
            </div>
          </Form>
          <Button>Check Availability</Button>
        </Segment>
      </Container>
    );
  }
}

export default ResForm;

const dropDown = [
  { key: 1, text: 0 },
  { key: 2, text: 1 },
  { key: 3, text: 2 },
  { key: 4, text: 3 },
  { key: 5, text: 4 }
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
    justifyContent: "space-around",
    alignItems: "baseline",
    marginTop: "30px",
    marginBottom: "30px"
  }
};
