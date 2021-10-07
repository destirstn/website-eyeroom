import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar7 from './DeskripsiNavbar7';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi7() {
    return (
        <>
        <DeskripsiNavbar7/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/cendo-oculenta.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">CENDO OCULENTA OPHTHALMIC GEL</h2>
            <li>
                <a href=" ">
                <img src="images/cendo-oculenta-2.jpeg" style={{}}/>
                <span>Topikal Zat Aktif Vit.A</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{padding: '20px', marginTop:'20px', marginBottom:'20px'}}>
        <Accordion defaultActiveKey="0" style={{marginBottom:'10px', background: '#91C788'}}>

        <Accordion.Item eventKey="0" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DESKRIPSI</Accordion.Header>
        <Accordion.Body>
        <p>Cendo Oculenta adalah sediaan topikal untuk mata yang mengandung zat aktif Vitamin A palmitate. Cendo Oculenta digunakan untuk mengatasi kondisi mata kering termasuk keratokonjungtivitis sicca (mata kering yang terjadi ketika air mata tidak mampu memberikan kelembapan) dan selaput air mata yang tidak stabil atau insufisiensi kelembapan kornea.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
            <li>Vitamin A palmitate 1.000 IU.</li>
            <li>Carbomer 980 3.5 mg.</li>
        </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <p>Cendo Oculenta digunakan sebagai terapi mata kering termasuk keratokonjungtivitis sicca dan selaput air mata yang tidak stabil atau insufisiensi kelembaban kornea.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <p>Dewasa dan anak: oleskan tipis-tipis Cendo Oculenta gel pada mata yang sakit, sebanyak 3-4 kali sehari.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>Hanya untuk pemakaian luar.</li>
            <li>Hindari penggunaan Cendo Oculenta pada pasien yang memiliki hipersensitif terhadap kandungan obat.</li>
        </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan dalam wadah kering yang tertutup pada suhu ruangan dan terhindar dari sinar matahari langsung.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp65.400 - Rp112.300 /Tube.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Tube @ 2.5 gram; 5 gram.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DTL0903812687A1">DTL0903812687A1</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>PT Cendo Pharmaceutical Industries, Jakarta - Indonesia.</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi7;