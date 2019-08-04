import {createStore} from "redux";
import {carReducer} from "./reducers/carTool.reducers";

export const carStore = createStore(carReducer);
