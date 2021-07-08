import { combineReducers, createStore } from "redux";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    todoListPage: todoReducer,
});

let store = createStore(reducers);


window.store = store; 

export default store;