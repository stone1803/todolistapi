import { combineReducers } from "redux";
import courseReducer from "./course";
// TAO STORE TONG UNG DUNG
const rootRecuder = combineReducers({
  // noi chua cac recuder cho nghiep vu store con
  courses:courseReducer
});
export default rootRecuder;
