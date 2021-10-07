import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
    return (
        <div className='cards'>
            <h1>Fitur Eyeroom!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-kamera.png"
                        text="Fitur kamera deteksi yang bisa kamu gunakan untuk mendeteksi nama obatmu."
                        label='Kamera'
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-deskripsi.png"
                        text="Fitur Deskripsi obat ini bisa kamu gunakan untuk mencari informasi seputar obat yang kamu cari."
                        label='Deskripsi'
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-voice.png"
                        text="Fitur yang akan membantu kamu untuk membacakan deskripsi obat yang kamu cari."
                        label='Auto Voice'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
