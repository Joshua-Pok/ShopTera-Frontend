import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../components/service/api.js"

export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async () => {
        const response = await api.get("/products/all");
        return response.data.data;
    }
)

const initialState = {
    products: [],
    errorMessage: null,
    isLoading: false,

}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.errorMessage = null;
        })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.errorMessage = action.error.message;
            })
    },
});

export default productSlice.reducer;
