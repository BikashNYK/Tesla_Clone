import { configureStore, combineReducers } from "@reduxjs/toolkit";

import carReducer from "../src/cars/carsSlice";
const rootReducer = combineReducers({
    car : carReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store