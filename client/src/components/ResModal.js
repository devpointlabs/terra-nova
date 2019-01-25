import React from "react";
import { Modal, Button, Image, Icon } from "semantic-ui-react";
import Terra_Nova_Cabins_Logo from "../assets/images/Terra_Nova_Cabins_Logo.png";
import { GoldButton } from "../styles/AppStyles";

class ResModal extends React.Component {
  state = { showModal: false };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  resModal = room => {
    return (
      <Modal
        basic
        size="small"
        open={this.state.showModal}
        close={this.handleClose}
        centered={false}
        trigger={
          <GoldButton
            style={{ marginBottom: "10px" }}
            onClick={() => this.showModal()}
          >
            Book Now
          </GoldButton>
        }
      >
        <Modal.Content style={styles.modal}>
          <Image wrapped size="small" src={Terra_Nova_Cabins_Logo} />

          <h1>Are you sure you want to continue with this room?</h1>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => this.showModal()}>
            Cancel
          </Button>
          <Button
            color="green"
            inverted
            onClick={() =>
              this.props.history.push({
                pathname: "/checkout",
                state: { room: room, userSpecs: this.props.userSpecs }
              })
            }
          >
            <Icon name="checkmark" /> Continue
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  render() {
    return <div>{this.resModal(this.props.room)}</div>;
  }
}

export default ResModal;

const styles = {
  modal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
};
