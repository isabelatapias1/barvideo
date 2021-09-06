import React from "react";
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-Icon.png';
import plusIcon from '../assets/static/plus-Icon.png';

const CarouselItem = ({ cover, Nombre, profesion, edad }) => (
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={Nombre}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src = {playIcon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src = {plusIcon} alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{Nombre}</p>
      <p className="carousel-item__details--subtitle">{{profesion}}</p>
      <p className="carousel-item__details--subtitle">{{edad}}</p>
    </div>
  </div>
);

 export default CarouselItem; 


