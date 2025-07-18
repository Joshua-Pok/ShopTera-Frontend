import React, {useEffect, useState} from 'react'
import SearchBar from "../search/SearchBar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../store/features/productSlice.js";

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products) //prodcut is slice and we want products variable inside product slice

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(() => {
        const results = products.filter((product) => {
            const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "all" || product.category.name.toLowerCase().includes(selectedCategory.toLowerCase());
            return matchesQuery && matchesCategory;
        });
        setFilteredProducts(results);
    }, [searchQuery, selectedCategory, products]);
    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="col-md-6 mt-2">
                <div className="search-bar input-group">
                    Searchbar coming here...
                </div>
            </div>
        </div>

            <div className="d-flex">
                <aside className="sidebar" style={{width: '250px', padding: '1rem'}}>
                    <SearchBar/>
                </aside>

                <section style={{flex: 1}}>
                    Products coming here...

                    <div className="pagination">
                        pagination comes here...
                    </div>
                </section>


            </div>
        </>
    )
}
export default Products
