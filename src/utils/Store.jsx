import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    // configureStore :- it is a function which takes an object as argument and returns a store object which can be used to access the state .

    reducer : {
       cart : cartSlice
    }
});

export default store;

 