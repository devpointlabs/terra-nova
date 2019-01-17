import { combineReducers } from "redux";
import rooms from "./rooms";
import reservation from "./reservation";

const rootReducer = combineReducers({
  rooms,
  reservation
});

export default rootReducer;
