import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import CarouselContainer from '../CarouselContainer';
import OurTeam from '../OurTeam';
import Navbar from '../Navbar';

function Home(){
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <CarouselContainer />
        <OurTeam/>
        </>
    );
}

export default Home;