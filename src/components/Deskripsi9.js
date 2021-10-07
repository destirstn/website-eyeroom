import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar9 from './DeskripsiNavbar9';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi9() {
    return (
        <>
        <DeskripsiNavbar9/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/erlamycetin.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">ERLAMYCETIN 1% SALEP MATA</h2>
            <li>
                <a href=" ">
                <img src="images/erlamycetin-2.jpg" style={{}}/>
                <span>Salep Mata Antibiotik Steril</span>
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
        ERLAMYCETIN 1% SALEP MATA adalah salep antibiotik steril untuk mata yang mengandung Chloramphenicol 1%. Chloramphenicol adalah antibiotik spektrum luas yang bersifat bakteriostatik. Obat ini efektif terhadap bakteri gram positif dan gram negatif yang aerob dan anaerob, kecuali Pseudomonas aeruginosa.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <p>Chloramphenicol 1%</p>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Mengobati mata infeksi seperti iritis</li>
                        <li>Konjungtivitis</li>
                        <li>Keratitis</li>
                        <li>Dakriositis</li>
                        <li>Infeksi mata lain yang sensitif terhadap Chloramphenicol</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                        <li>Dosis penggunaan: PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER</li>
                        <li>Cara penggunaan: Oleskan pada mata yang sakit sebanyak 3 kali sehari</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
        <p>HARUS DENGAN RESEP DOKTER. ibu menyusui, wanita hamil, fungsi ginja l yang buruk.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan pada suhu di bawah 30 derajat Celcius, di tempat kering dan terhindar dari cahaya.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp9.200 - Rp28.900,-/tube</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>3.5g/tube</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/fcjl6rno4s0rdh51qnpvpm9th2/all/row/10/page/1/order/4/DESC/search/0/DKL7206313731A1">DKL7206313731A1</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>ERLANGGA EDI LABORATORIES (ERELA) - Indonesia</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi9;
