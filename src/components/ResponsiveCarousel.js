import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ResponsiveCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map(image => {
                return (
                    <div>
                        <img src={image} alt="carousel-img" />
                        <p className="legend">Legend 3</p>
                    </div>
                )
            })}
        </Carousel>
    );
};

export default ResponsiveCarousel;
