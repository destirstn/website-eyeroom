import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar5 from './DeskripsiNavbar5';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi5() {
    return (
        <>
        <DeskripsiNavbar5/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/biovision-gold.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">BIOVISION GOLD</h2>
            <li>
                <a href=" ">
                <img src="images/biovision-gold-2.jpg" style={{}}/>
                <span>Suplemen</span>
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
        Biovision adalah suplemen yangan mengandung Ekstrak Billberry, Betacaroten, Vitamin C, Riboflavin. Biovision digunakan untuk membantu memelihara kesehatan mata, mencegah dan membantu mengobati beberapa gangguan mata, seperti katarak, gangguan penglihatan pada orang tua, glaukoma, buta senja, dan retinopati diabetik (gangguan pada mata yang terjadi pada penderita diabetes).
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Bilberry extract 80 mg</li>
                        <li>Vitamin C 60 mg</li>
                        <li>Beta-carotene 30 mg</li>
                        <li>Vitamin B2 1.5 mg</li>
                        <li>Lutein 3 mg</li>
                        <li>Zeaxanthin 0,6 mg</li>
                        <li>Vitamin A 4000 IU</li>
                        <li>Vitamin C 60 mg</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Membantu menjaga kesehatan mata</li>
                        <li>Menghambat terjadinya katarak</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <p>Dosis penggunaan Biovision strip</p>
        <p>Biovision diminum 1 kapsul sekali sehari, setiap hari</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
        <p>Biovision dapat diminum sebelum maupun sesudah makan</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <p>Penggunaan pada ibu hamil dan menyusui memerlukan konsultasi dengan dokter</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan di tempat yang sejuk dan kering</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Dus, 3 Strip @ 10 Kapsul</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Dus @ botol @ 15 ml, TETES MATA 0.1%, 0.3%</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/fcjl6rno4s0rdh51qnpvpm9th2/all/row/10/page/0/order/4/DESC/search/0/SD061329691">SD061329691</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>Indofarma Global Medika</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi5;