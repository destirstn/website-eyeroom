import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ObatOne from '../images/Obat.svg';
import ObatTwo from '../images/Obat-2.svg';
import ObatThree from '../images/Obat-3.svg';
import ObatFour from '../images/Obat-4.svg';


const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DDFFBC;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #444141;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 2rem;
  font-family: 'Montserrat', sans-serif;
  h1 {
    font-size: 4rem;

    @media screen and (max-width: 500px){
      font-size: 2.4rem;
      text-align: center;
    }
  }
  p {
    margin: 1rem 0;
    font-size: 1.5rem;
    line-height: 1.0;

    @media screen and (max-width: 500px){
      font-size: 1rem;
      text-align: center;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 2px solid #4CA73E;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #4CA73E;

  @media screen and (max-width: 500px){
    font-size: 0.8rem;
    padding: 0.3rem 2rem;
    margin-left: 25px;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 40px;
    left: 110px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 250px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 290px;
    right: 75px;
  }

  @media screen and (max-width: 500px){
    padding: 5rem;
    margin: auto;
    ${Image}:nth-child(1) {
      top: 50px;
      left: 100px;
    }
    ${Image}:nth-child(2) {
      top: 190px;
      right: 60px;
    }
    ${Image}:nth-child(3) {
      top: 270px;
      left: 100px;
    }
    ${Image}:nth-child(4) {
      bottom: 20px;
      right: 100px;
    }
  }
`;

const Menutab = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };


  return (
    <Section>
      <Container>
        <ColumnLeft>
        <div className="logo-eyeroom"><img src="images/logo-eyeroom.png" style={{width: '150px', marginLeft: '70px'}}/></div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            Welcome to Eyeroom
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            "MATA yang sehat adalah cerminan dari jiwa yang sehat, karena MATA mempunyai pengaruh yang sangat penting bagi tubuh kita"
          </motion.p>
          <a href="https://scan-kamera.netlify.app/"><Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F686',
              border: 'none',
              color: '#000000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Scan Obat with Camera or Gallery
          </Button></a>
          <a href="./coba"><Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F686',
              border: 'none',
              color: '#000000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            List of eye medicines and vitamins
          </Button></a>

        </ColumnLeft>
        <ColumnRight>
          <Image
            src={ObatOne}
            alt='obat'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={ObatTwo}
            alt='obat'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={ObatThree}
            alt='obat'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={ObatFour}
            alt='obat'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Menutab;
