import React from 'react'
import {useState} from 'react'
import HeroSlider from "./HeroSlider.jsx";
import SearchBar from "../search/SearchBar.jsx";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <div className='hero'>
            <HeroSlider setCurrentSlide={currentSlide}/>
            <div className="hero-content">
                <h1>Welcome to <span className='text-primary'>ShopTera</span>.com</h1>
                <SearchBar></SearchBar>
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
