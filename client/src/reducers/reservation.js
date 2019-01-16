export default (state = [], action) => {
  switch (action.type) {
    case ROOMS:
      return action.rooms;
    default:
      return state;
  }
};
