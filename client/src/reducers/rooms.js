import axios from "axios";

const ROOMS = "ROOMS";

export const getRooms = () => {
  return dispatch => {
    axios
      .get("api/rooms")
      .then(res => dispatch({ type: ROOMS, rooms: res.data }));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case ROOMS:
      return action.rooms;
    default:
      return state;
  }
};
