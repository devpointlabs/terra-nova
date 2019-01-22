const RESERVED = "RESERVED";

export const setReserved = r => {
  return dispatch => {
    dispatch({ type: RESERVED, reserved: r });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case RESERVED:
      return action.reserved;
    default:
      return state;
  }
};
