import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar13 from './DeskripsiNavbar13';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi13() {
    return (
        <>
        <DeskripsiNavbar13/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/levocin.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">LEVOCIN TABLET 500 mg</h2>
            <li>
                <a href=" ">
                <img src="images/levocin-2.jpg" style={{}}/>
                <span>Obat Tetes Mata</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{padding: '20px', marginTop:'20px', marginBottom:'20px'}}>
        <Accordion defaultActiveKey="0" style={{marginBottom:'10px', background: '#91C788'}}>

        <Accordion.Item eventKey="0" style={{background: '#91C788'}}>
        <Accordion.Header>DESKRIPSI</Accordion.Header>
        <Accordion.Body>
            Levocin merupakan obat tetes mata yang diproduksi oleh PT. Sanbe Vision dan telah terdaftar pada BPOM. Levocin tetes mata 5ml mengandung 0,1% levofloxacin. Kandungan levofloxacin pada Levocin merupakan antibiotika golongan kuinolon yang dapat digunakan untuk mengobati infeksi mata eksternal.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <p>Levofloxacin 5 mg/ml.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <p>Dapat mengobati infeksi mata eksternal (diluar bola mata).</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>Teteskan 1 tetes Levocin di mata yang sakit sebanyak 3 kali sehari.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Hindari pemakaian jangka panjang.</li>
                <li>Tidak untuk langsung diteteskan pada bilik mata depan.</li>
                <li>Tidak untuk infeksi akibat Staph aereus yang resisten terhadap antibiotik betha laktam.</li>
                <li>Ibu hamil dan menyusui.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan di tempat sejuk dan kering, terhindar dari paparan sinar matahari langsung.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp. 80.000 - Rp. 140.000/ Botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Dus, Botol Plastik @ 5 ml.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
            <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DKL0622242246A1">DKL0622242246A1</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p> oleh SANBE FARMA - Indonesia.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi13;