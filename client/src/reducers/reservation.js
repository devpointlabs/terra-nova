const RESERVATION = "RESERVATION";

export const setReservation = res => {
  return dispatch => {
    dispatch({ type: RESERVATION, reservation: res });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case RESERVATION:
      return action.reservation;
    default:
      return state;
  }
};
