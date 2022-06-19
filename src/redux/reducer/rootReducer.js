import Reducer from "./reducer";
import TabReducer from "./tabReducer";
import { combineReducers } from "redux";

const RootReducer=combineReducers({
    reducer:Reducer,
    TabReducer:TabReducer,
});
export default RootReducer;