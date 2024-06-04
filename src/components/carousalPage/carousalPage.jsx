import React from 'react'
import { useState } from 'react'
import './carousalPage.css'
import image1 from './miss.webp'
import image2 from './image-2.webp'
import image3 from './image-3.webp'
import logo from './logo.webp'

const images = [image1, image2, image3, image1, image2, image3];

function CarousalPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;


    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const displayedImages = images.slice(currentIndex, currentIndex + itemsPerPage).concat(
        images.slice(0, Math.max(0, currentIndex + itemsPerPage - images.length))
    );

    return (
        <div className="coloring">
        <div className="carouselPage">
            <div className="carousel-tagline">WHAT WE DO</div>
            <div className="carousel-heading">
                <h1 style={{ fontSize: "39px", lineHeight: "3.5rem", width: "35%" }}>SERVICES PROVIDE<br></br> FOR YOU</h1>
                <p style={{ width: "40%" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatem sint tempora facere amet ipsa quae quis veniam assumenda neque.</p>
            </div>


            <div className="carousel">
                <div className="carousel-images" style={{ transform: `translateX(-${(currentIndex % images.length) * (100 / itemsPerPage)}%)` }}>
                    {images.map((image, index) => (
                        <div className="image-container" key={index}>
                            <img src={image} alt={`Slide ${index}`} className="carousel-image" style={{ objectFit: "fill", width: "100%", height: "100%" }} />
                            <div className="hover-overlay">
                                <div className="hover-container">
                                    <img src={logo} alt="" srcset="" style={{ height: "50px", width:"50px" }} />
                                    <p style={{ fontFamily: "NimbusSanL-Reg", fontWeight: '600', fontSize: "20px" }}>WEB DEVELOPMENT</p>
                                    <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                                    <a href="https://www.fylehq.com" target="_blank" className="read-more">READ MORE →</a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default CarousalPage
