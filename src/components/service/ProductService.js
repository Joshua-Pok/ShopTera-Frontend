import { api } from "./api.js"
import {triggerTransitionEnd} from "bootstrap/js/src/util/index.js";

export const getDistinctProductsByName = async () => {
    try{
        const response = await api.get("/products/distinct/products")
        return response.data;

    }catch(err){
        throw err;
    }
};