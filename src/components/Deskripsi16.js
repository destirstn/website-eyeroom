import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar16 from './DeskripsiNavbar16';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi16() {
    return (
        <>
        <DeskripsiNavbar16/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/optalvit.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">OPTALVIT PLUS 10 TABLET</h2>
            <li>
                <a href=" ">
                <img src="images/optalvit-plus-2.jpg" style={{}}/>
                <span>Vitamin & Suplemen</span>
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
            Optalvit Plus adalah suplemen mata yang diproduksi oleh PT. Lapi Laboratories. Optalvit Plus digunakan untuk membantu menjaga kesehatan mata.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Ekstrak bilberry kering 80 mg.</li>
                <li>Retinol 1.600 IU.</li>
                <li>β-karoten 5 mg.</li>
                <li>Vitamin E 50 mg.</li>
                <li>Lutein 250 mcg.</li>
                <li>Zeaxanthin 67 mcg.</li>
                <li>Selenium 15 mcg.</li>
                <li>Zn Sulfate 5 mg.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Meningkatkan fungsi penglihatan serta mencegah timbulnya masalah mata.</li>
                <li>Membantu mencegah berbagai masalah mata seperti katarak, rabun senja, dan glaukoma.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>Dewasa: 1 kali sehari 1 tablet.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Ibu hamil dan menyusui.</li>
                <li>Pasien diabetes melitus.</li>
                <li>Pasien dengan gangguan fungsi ginjal dan hati akut.</li>
                <li>Hentikan pemakaian jika terjadi reaksi alergi.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
            <p>Simpan pada suhu di bawah 30 derajat Celcius.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp 58.000 - Rp 74.000 / Strip.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Box, 3 Strip @ 10 Tablet.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/SD212548551">SD212548551</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p> oleh PT LAPI LABORATORIES - Kota Jakarta Barat, DKI Jakarta.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi16;