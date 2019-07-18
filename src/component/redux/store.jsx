import { createStore } from "redux";
import reducers from "../redux/reducers.jsx";

const store = createStore(reducers);

export default store;
