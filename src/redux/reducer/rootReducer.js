import Reducer from "./reducer";
import TabReducer from "./tabReducer";
import LoaderReducer from "./loaderReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  reducer: Reducer,
  TabReducer: TabReducer,
  LoaderReducer: LoaderReducer,
});
export default RootReducer;
