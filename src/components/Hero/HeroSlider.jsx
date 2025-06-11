import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bg1 from '../../assets/hero-1.jpg'
import bg2 from '../../assets/hero-2.jpg'
import bg3 from '../../assets/hero-3.jpg'
import bg4 from '../../assets/hero-6.jpg'
import bg5 from '../../assets/hero-7.jpg'


const HeroSlider = () => {


    const images = [bg1, bg2, bg3, bg4, bg5];

    const settings = {
        infinite: true,
        speed: 12000,
        autoplay: true,
        autoplaySpeed: 15000,
    };

    return (
        <Slider {...settings} className='hero-slider'>
            {images.map((img, index) => (
                <div key={index} className='slide'>
                    <img src={img} alt={`slide ${index + 1}`} className='slide-image'/>
                </div>
            ))}
        </Slider>
    )
}
export default HeroSlider
