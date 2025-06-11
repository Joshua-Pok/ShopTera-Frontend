import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../store/features/categorySlice.js";

const SearchBar = ({value, onChange, onCategoryChange }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const handleCategoryChange = (e) => {
        onCategoryChange(e.target.value);
    }
    useEffect(() => {
        dispatch(getAllCategories())

    }, [dispatch]);


    return (
        <div className='search-bar input-group input-group-sm'>

            <select onChange={handleCategoryChange} className='form-control.sm'>
                <option value="all">All Categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <input type="text" className="form-control" placeholder="Search for products(eg: watch)"
            value={value} onChange={onChange}/>
            <button className="search-button">Clear Filter</button>
        </div>
    )
}
export default SearchBar
