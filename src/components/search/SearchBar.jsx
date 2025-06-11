import React from 'react'

const SearchBar = ({value, onChange}) => {
    return (
        <div className='search-bar input-group input-group-sm'>

            <select className='form-control.sm'>
                <option value="all">All Categories</option>
                <option value="all">Tabs</option>
                <option value="all">Gadget</option>
            </select>
            <input type="text" className="form-control" placeholder="Search for products(eg: watch)"
            value={value} onChange={onChange}/>
            <button className="search-button">Clear Filter</button>
        </div>
    )
}
export default SearchBar
