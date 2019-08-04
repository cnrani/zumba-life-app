import {createStore} from "redux";
import {calReducer} from "./reducers/calcTool.reducers";

export const calcStore = createStore(calReducer);
