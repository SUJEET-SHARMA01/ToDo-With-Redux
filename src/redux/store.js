import { configureStore } from "@reduxjs/toolkit";
import { todoReducer} from "../redux/slice"


export const Store = configureStore({
    reducer:{
        todo : todoReducer
    }
})

