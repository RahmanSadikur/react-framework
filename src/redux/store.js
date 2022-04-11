import RootReducer from "./reducer/rootReducer";

import { createStore } from "redux";

const Store=createStore(RootReducer);
export default Store;