import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice.js'
import categoryReducer from "../store/features/categorySlice.js"
import productReducer from "../store/features/productSlice.js"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        category: categoryReducer,
        product : productReducer,
    }
})
