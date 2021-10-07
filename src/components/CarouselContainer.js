import React from "react";
import { Carousel } from "react-bootstrap";
import './CarouselContainer.css';

const CarouselContainer = () => {
    return (
        <Carousel variant="dark" id="fitur">
        <Carousel.Item interval={3000} fade="true">
            <img
            className="d-block w-100"
            src="images/img-kamera.png"
            alt="First slide"
            height="600px"
            />
            <Carousel.Caption>
                <h3>KAMERA</h3>
                <p>" Fitur kamera deteksi yang bisa kamu gunakan untuk mendeteksi nama obatmu. "</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={3000} fade="true">
            <img
            className="d-block w-100"
            src="images/img-deskripsi.png"
            alt="Second slide"
            height="600px"
            />
            <Carousel.Caption>
                <h3>DAFTAR OBAT & DESKRIPSI</h3>
                <p>" Fitur Deskripsi obat ini bisa kamu gunakan untuk mencari informasi seputar obat yang kamu cari. "</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000} fade="true">
            <img
            className="d-block w-100"
            src="images/img-voice.png"
            alt="Third slide"
            height="600px"
            />
            <Carousel.Caption>
                <h3>AUTO VOICE</h3>
                <p>" Fitur yang akan membantu kamu untuk membacakan deskripsi obat yang kamu cari. "</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;