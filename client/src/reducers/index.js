import { combineReducers } from "redux";
import rooms from "./rooms";
import reservation from "./reservation";
import reserved from "./reserved";

const rootReducer = combineReducers({
  rooms,
  reservation,
  reserved
});

export default rootReducer;
