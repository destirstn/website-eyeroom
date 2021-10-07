import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar2 from './DeskripsiNavbar2';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi2() {
    return (
        <>
        <DeskripsiNavbar2/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/alletrol-compositum.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">ALLETROL COMPOSITUM</h2>
            <li>
                <a href=" ">
                <img src="images/alletrol-compositum-2.jpg" style={{}}/>
                <span>Tetes Mata Untuk Radang</span>
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
        Alletrol compositum tetes mata adalah obat yang digunakan untuk pengobatan penyakit mata terutama karena radang yang disertai infeksi bakteri. Alletrol compositum tetes mata mengandung Dexamethasone Sodium phosphate, obat yang termasuk golongan kortikosteroid, dikombinasikan dengan neomycin sulphate dan polymixin B sulphate, obat yang termasuk antibiotik.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <p>Tiap ml Alletrol compositum tetes mata mengandung zat aktif (nama generik) sebagai berikut :</p>
                    <ol>
                        <li>Dexamethasone sodium phosphate 1 mg</li>
                        <li>Neomycin sulphate setara neomycin base 3.5 mg</li>
                        <li>Polymixin B sulphate 6000 UI</li>
                    </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Kondisi radang pada mata yang disertai oleh infeksi oleh bakteri tertentu</li>
                        <li>Uveitis anterior kronis dan luka pada kornea mata yang disebabkan oleh iritasi oleh bahan kimia, radiasi, panas, dan benda-benda asing</li>
                        <li>Inflamasi segmen anterior yang disertai infeksi</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                      <li>Teteskan obat pada mata, 1-2 tetes setiap 1 jam pada siang hari dan setiap 2 jam pada waktu malam hari</li>
                      <li>Setelah gejala berkurang, dosis dapat diturunkan menjadi, 1 tetes setap 4 jam</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                    <li>Penggunaan jangka panjang obat-obat golongan kortikosteroid dapat menyebabkan katarak subkapsular posterior, glaukoma dengan kemungkinan kerusakan pada saraf optik, dan dapat meningkatkan terjadinya infeksi okular sekunder oleh jamur atau virus</li>
                    <li>Pemakaian obat-obat antibiotik bisa menyebabkan superinfeksi berupa pertumbuhan bakteri yang tidak peka. Bila terjadi sebaiknya dilakukan pemeriksaan lanjutan</li>
                    <li>Kombinasi kortikosteroid bisa menyebabkan masking effect (kondisi dimana penderita merasakan penurunan gejala, namun terjadi peningkatan infeksi)</li>
                    <li>Penggunaan lebih dari 10 hari, sebaiknya dilakukan pemeriksaan tekanan okular mata</li>
                  </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Disimpan dalam wadah yang tertutup rapat dan terlindung dari cahaya</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp14.700 - Rp32.500 /botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Dus, botol plastik @ 5ml</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DKL9606309746A1">DKL9606309746A1</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>ERELA - Indonesia</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi2;