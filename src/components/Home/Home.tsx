import React, { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';

const images = [
  'imagen1.jpg',
  'imagen2.jpg',
  'imagen3.jpeg',
];

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <NavBar />
      <h1 className='text-center m-3'>Musical Hendrix</h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`} key={index}>
              <img src={`../public/img/${image}`} className="d-block w-100 img-fluid" alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', maxHeight: '500px' }} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={prevImage}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={nextImage}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='col-md-12'>
        <p className='text-center h5 m-3'>
          Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de
          experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
          mejores elecciones para tu compra musical.
        </p>
      </div>
    </div>
  );
};
