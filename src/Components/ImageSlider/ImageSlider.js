import React, { useState, useEffect } from 'react';
import auth1 from "./img/auth1.png"
import auth2 from "./img/auth2.png"
import auth3 from "./img/auth3.png"
import "./ImageSlider.css"

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [auth1, auth2, auth3]; // array com os nomes das imagens

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <img className='image-slider' src={images[currentImage]} alt={`Imagem${[currentImage]}`} />
    );
};

export default ImageSlider;