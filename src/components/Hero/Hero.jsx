import React from 'react'
import {useState} from 'react'
import HeroSlider from "./HeroSlider.jsx";
import SearchBar from "../search/SearchBar.jsx";
import { setSearchQuery, setSelectedCategory } from "../../store/features/searchSlice.js";
import {useDispatch} from "react-redux";

const Hero = () => {
    const dispatch = useDispatch();


    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <div className='hero'>
            <HeroSlider setCurrentSlide={currentSlide}/>
            <div className="hero-content">
                <h1>Welcome to <span className='text-primary'>ShopTera</span>.com</h1>
                <SearchBar onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
                ></SearchBar>
                <div className="home-button-container">
                    <a href="#" className="home-shop-button link">
                        Explore our Store!
                    </a>
                    <button className='deals-button'>Today's Deals!</button>
                </div>
            </div>

        </div>
    )
}
export default Hero
